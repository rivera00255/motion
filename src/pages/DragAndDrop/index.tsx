import { DragEvent, SyntheticEvent, useRef, useState } from 'react';
import styled from 'styled-components';

const initailList = [
  { id: 1, content: 'item1' },
  { id: 2, content: 'item2' },
  { id: 3, content: 'item3' },
  { id: 4, content: 'item4' },
];

const DragAndDrop = () => {
  const [list, setList] = useState(initailList);
  const [target, setTarget] = useState<HTMLDivElement | null>(null);

  const onDragOver = (e: SyntheticEvent) => {
    // console.log('over');
    e.preventDefault();
  };

  const onDragStart = (e: any) => {
    // console.log('start');
    setTarget(e.target);
    e.target.classList.add('grab');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target);
  };

  const onDragEnd = (e: DragEvent<HTMLDivElement>) => {
    // console.log('end');
    if (e.target instanceof HTMLDivElement) {
      e.target.classList.remove('grab');
      e.dataTransfer.dropEffect = 'move';
    }
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    // console.log('drop');
    if (e.target instanceof HTMLDivElement) {
      let dragIndex = Number(target?.dataset.index);
      let dropIndex = Number(e.target.dataset.index);

      let newList = [...initailList];
      newList[dragIndex] = newList.splice(dropIndex, 1, newList[dragIndex])[0];

      setList(newList);
    }
  };

  return (
    <Main>
      <section>
        <h3>Drag And Drop</h3>
        <Container>
          {list.map((item, i) => (
            <div
              draggable
              key={item.id}
              data-index={i}
              onDragOver={onDragOver}
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
              onDrop={onDrop}>
              {item.content}
            </div>
          ))}
        </Container>
      </section>
    </Main>
  );
};

const Main = styled.main`
  > section {
    width: 960px;
    margin: 0 auto;
    padding: 40px 0;
    > h3 {
      margin-bottom: 20px;
    }
  }
`;

const Container = styled.div`
  border: 1px solid #94a3b8;
  border-radius: 5px;
  max-width: 50vh;
  padding: 20px 0 10px 0;
  > div {
    background: #f1f5f9;
    margin-bottom: 10px;
    padding: 10px 16px;
    max-width: 50vw;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background: #94a3b8;
      color: #f1f5f9;
    }
  }
`;

export default DragAndDrop;
