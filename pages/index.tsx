import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Header from 'components/Header';
import MainFeaturedPost from 'components/MainFeaturedPost';
import FeaturedPost from '@components/FeaturedPost';

const sections = [{ title: '채용공고', url: '#' }];

const mainFeaturedPost = {
  title: '',
  description: '인기 채용 공고',
  image: 'jobposting.png',
  imageText: '',
  linkText: '',
};

const featuredPosts = [
  {
    title: '대기업 채용 담당자가 보는 스펙',
    date: '10월 10일',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'recruit.png',
    imageLabel: 'Image Text',
  },
  {
    title: '전직의 스킬',
    date: '10월 30일',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'frontEnd.png',
    imageLabel: 'Image Text',
  },
];

const posts = [post1, post2, post3];

export default function Blog() {
  return (
    <Container maxWidth='lg'>
      <Header title='GoodJob' sections={sections} />
      <main>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
      </main>
    </Container>
  );
}
