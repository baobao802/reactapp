import { Image, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { Page } from '@/common/components';
import { LoginForm } from '../components';
import { Credentials } from '../types';

const Login = () => {
  const _onSubmit = (values: Credentials) => {
    console.log(values);
  };

  // useEffect(() => {
  //   if (error && 'data' in error) {
  //     message.error((error.data as any).message);
  //   }
  // }, [error]);

  // useEffect(() => {
  //   if (isSuccess) {
  //     window.location.href = '/my-hub';
  //     message.success('LogIn successful!');
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isSuccess]);

  return (
    <Page
      pageHeader={{ title: 'Login | SportHub' }}
      style={{ maxWidth: '320px', margin: 'auto' }}
    >
      <Typography.Title style={{ textAlign: 'center' }}>
        <Image src='/images/logo.svg' alt='Sport Hub Logo' preview={false} />
      </Typography.Title>
      <LoginForm onSubmit={_onSubmit} isSubmitting={false} />
      <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to='/forgot-password'>Forgot password?</Link>
        <Link to='/sign-up'>Create a new one.</Link>
      </Space>
    </Page>
  );
};

export default Login;
