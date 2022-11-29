import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  Group,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  root: {
    height: '100vh',
    paddingTop: 80,
    paddingBottom: 80,
    backgroundColor: theme.fn.variant({
      variant: 'filled',
      color: theme.primaryColor,
    }).background,
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colors[theme.primaryColor][3],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,
    color: theme.white,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colors[theme.primaryColor][1],
  },
}));

export default function ServerOverload() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const reload = () => navigate(0);

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>503</div>
        <Title className={classes.title}>All of our servers are busy</Title>
        <Text
          color='dimmed'
          size='lg'
          align='center'
          className={classes.description}
        >
          We cannot handle your request right now, please wait for a couple of
          minutes and refresh the page. Our team is already working on this
          issue.
        </Text>
        <Group position='center'>
          <Button variant='white' size='md' onClick={reload}>
            Refresh the page
          </Button>
        </Group>
      </Container>
    </div>
  );
}
