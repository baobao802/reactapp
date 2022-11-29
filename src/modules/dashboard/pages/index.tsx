import { useTranslation } from 'react-i18next';
import { Page } from '@/common/components';

interface Props {}

const Dashboard = (props: Props) => {
  const { t } = useTranslation();

  return (
    <Page pageHeader={{ title: 'Dashboard | SportHub' }}>
      <div>{t('welcome', { username: 'William' })}</div>
    </Page>
  );
};

export default Dashboard;
