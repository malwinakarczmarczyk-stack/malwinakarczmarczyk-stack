interface MarkdownRendererProps {
  htmlContent: string;
  className?: string;
}

export default function MarkdownRenderer({
  htmlContent,
  className = "",
}: MarkdownRendererProps) {
  return (
    <div
      className={`prose max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
