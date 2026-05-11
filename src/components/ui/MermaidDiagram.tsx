import { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'

mermaid.initialize({
  startOnLoad: false,
  theme: 'neutral',
  themeVariables: {
    primaryColor: '#631923',
    primaryTextColor: '#2d2d2d',
    primaryBorderColor: '#631923',
    lineColor: '#9a9a9a',
    secondaryColor: '#fdf8f8',
    tertiaryColor: '#f9f9f9',
  }
})

let idCounter = 0

const MermaidDiagram = ({ code }: { code: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const id = useRef(`mermaid-${++idCounter}`)
  const [svg, setSvg] = useState<string>('')

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const result = await mermaid.render(id.current, code)
        setSvg(result.svg)
      } catch (e) {
        setSvg(`<pre style="color:red;font-size:12px">${e}</pre>`)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [code])

  if (!svg) return (
    <div style={{
      margin: '1.75rem 0',
      height: '200px',
      background: '#f9f9f9',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#999',
      fontSize: '14px'
    }}>
      Loading diagram...
    </div>
  )

  return (
    <div
      ref={ref}
      style={{ margin: '1.75rem 0', overflowX: 'auto', textAlign: 'center' }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}

export default MermaidDiagram