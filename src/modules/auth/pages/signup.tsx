import { Image, message, Typography } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Page } from '@/common/components';
import SignupForm, { FormValues } from '../components/form/SignupForm';

const SignUp = () => {
  const navigate = useNavigate();

  const _onSubmit = (values: FormValues) => {
    const payload = {
      givenName: values.givenName,
      familyName: values.familyName,
      email: values.email,
      username: values.username,
      password: values.password,
      telephone: values.telephone,
      roles: [
        {
          id: '0644f130-02ae-44b9-83ae-8daa0b858f28',
          name: 'app_admin',
        },
      ],
    };
  };

  // useEffect(() => {
  //   if (isSuccess) {
  //     navigate('/login');
  //     message.success('Đăng ký thành công');
  //   }
  //   if (error) {
  //     message.error((error as any).data.message);
  //   }
  // }, [isSuccess, error]);

  return (
    <Page
      pageHeader={{ title: 'Signup | SportHub' }}
      style={{ maxWidth: '420px', margin: 'auto' }}
    >
      <Typography.Title style={{ textAlign: 'center' }}>
        <Image src='/images/logo.svg' alt='Sport Hub Logo' preview={false} />
      </Typography.Title>
      {/* <Button type='primary' size='large' icon={<GoogleOutlined />} ghost block>
        Google
      </Button>
      <Divider orientation='center'>Register</Divider> */}
      <SignupForm onSubmit={_onSubmit} isSubmitting={false} />
    </Page>
  );
};

export default SignUp;
