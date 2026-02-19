import React, { useEffect, useRef } from 'react';

export interface ChartData {
  labels: string[];
  values: number[];
}

export interface ChartComponentProps {
  data: ChartData;
}

export function ChartComponent({ data }: ChartComponentProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    ctx.clearRect(0, 0, width, height);
    
    const max = Math.max(...data.values);
    const barWidth = width / data.values.length;
    const padding = 40;
    const chartHeight = height - padding;
    
    data.values.forEach((value, i) => {
      const barHeight = (value / max) * (chartHeight - 20);
      const x = i * barWidth + 10;
      const y = chartHeight - barHeight;
      
      ctx.fillStyle = '#0690de';
      ctx.fillRect(x, y, barWidth - 20, barHeight);
      
      ctx.fillStyle = '#333';
      ctx.font = 'bold 14px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(value.toString(), x + (barWidth - 20) / 2, y - 5);
      
      ctx.font = '12px sans-serif';
      ctx.fillText(data.labels[i], x + (barWidth - 20) / 2, height - 10);
    });
    
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(5, chartHeight);
    ctx.lineTo(width - 5, chartHeight);
    ctx.stroke();

  }, [data]);

  return (
    <div style={{ padding: '20px', background: '#f9fafb', borderRadius: '8px' }}>
      <canvas ref={canvasRef} width={600} height={400} style={{ display: 'block' }} />
    </div>
  );
}