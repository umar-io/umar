import { memo } from 'react';
import Hero from '../Sections/Hero';
import Stack from '../Sections/Stack';
import stackData from '../Sections/stackData';
import Projects from '../Sections/Projects';
import Contact from '../Sections/Contact';

const MemoizedHero = memo(Hero);
const MemoizedStack = memo(Stack);
const MemoizedProjects = memo(Projects);
const MemoizedContact = memo(Contact);

const Index = () => {
  return (
    <>
      <br />
      <MemoizedHero />
      <MemoizedStack data={stackData} />
      <MemoizedProjects />
      <MemoizedContact />
    </>
  );
};

export default Index;