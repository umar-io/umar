import { memo } from 'react';
import Hero from '../Sections/Hero';
import Stack from '../Sections/Stack';
import stackData from '../Sections/stackData';
import Projects from '../Sections/Projects';

const MemoizedHero = memo(Hero);
const MemoizedStack = memo(Stack);
const MemoizedProjects = memo(Projects);

const Index = () => {
  return (
    <>
      <br />
      <MemoizedHero />
      <MemoizedStack data={stackData} />
      <MemoizedProjects />
    </>
  );
};

export default Index;