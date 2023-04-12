import { useRef, useState } from 'react';
import styled from 'styled-components';

const Drag = () => {
  const boundaryRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });

  const getRange = (position: number, min: number, max: number) => {
    if (position < min) return min;
    if (position > max) return max;
    return position;
  };

  const onMouseDown = (clickEvent: React.MouseEvent<Element, MouseEvent>) => {
    const onMouseMove = (e: MouseEvent) => {
      //   const deltaX = e.clientX - clickEvent.clientX;
      //   const deltaY = e.clientY - clickEvent.clientY;
      //   setPosition({ x: x + deltaX, y: y + deltaY });
      if (boundaryRef.current && targetRef.current) {
        const boundary = boundaryRef.current.getBoundingClientRect();
        const target = targetRef.current.getBoundingClientRect();

        const deltaX = e.clientX - clickEvent.clientX;
        const deltaY = e.clientY - clickEvent.clientY;
        const margin = 10;

        setPosition({
          x: getRange(
            x + deltaX,
            Math.floor(-boundary.width / 2 + target.width / 2 + margin),
            Math.floor(boundary.width / 2 - target.width / 2 - margin)
          ),
          y: getRange(
            y + deltaY,
            Math.floor(-boundary.height / 2 + target.height / 2 + margin),
            Math.floor(boundary.height / 2 - target.height / 2 - margin)
          ),
        });
      }
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp, { once: true });
  };

  return (
    <Main>
      <section>
        <h3>Drag</h3>
        <Container ref={boundaryRef}>
          <div style={{ transform: `translateX(${x}px) translateY(${y}px)` }} onMouseDown={(e) => onMouseDown(e)}>
            <div ref={targetRef} />
          </div>
        </Container>
      </section>
    </Main>
  );
};

const Main = styled.main`
  > section {
    width: 960px;
    margin: 0 auto;
    padding: 40px 16px;
  }
`;

const Container = styled.div`
  width: 800px;
  height: 400px;
  background: #f8fafc;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    > div {
      background: #94a3b8;
      width: 80px;
      height: 80px;
      border-radius: 5px;
    }
  }
`;

export default Drag;
