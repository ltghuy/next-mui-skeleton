'use client';
import { CoreAvatar, CoreStack, CoreTypography } from '@/components/core';
import { API_ROUTES } from '@/constants/apiRoutes';
import { Post } from '@/models/post/entities';
import { postService } from '@/services/post';
import { useTheme } from '@mui/material';
import useSWR from 'swr';

const HomePage = () => {
  const { palette } = useTheme();
  const { data, isLoading, error } = useSWR(
    API_ROUTES.POSTS,
    postService.getAll
  );

  const renderContent = () => {
    if (error) {
      return (
        <CoreTypography color={'error'}>Something went wrong</CoreTypography>
      );
    }
    if (isLoading) {
      return <CoreTypography>Loading...</CoreTypography>;
    }
    return (
      <CoreStack spacing={2}>
        {data?.map((post: Post, index: number) => (
          <CoreTypography
            key={post.id}
            sx={{
              background:
                index % 2 === 0 ? palette.secondary.light : palette.grey[100],
              padding: 1,
            }}
          >
            {post.body}
          </CoreTypography>
        ))}
      </CoreStack>
    );
  };
  return (
    <CoreStack component={'main'} width={'100%'}>
      <CoreStack
        sx={{ background: palette.primary.main }}
        paddingX={4}
        paddingY={2}
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <CoreAvatar>HL</CoreAvatar>
        <CoreTypography color={'common.white'}>
          This is home screen
        </CoreTypography>
      </CoreStack>
      <CoreStack padding={5}>{renderContent()}</CoreStack>
    </CoreStack>
  );
};

export default HomePage;
