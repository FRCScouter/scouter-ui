import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Integrate',
    description: (
      <>
        ScouterUI is designed to be seamlessly integrated into your React and
        React Native projects, allowing you to build beautiful UIs with minimal
        configuration.
      </>
    ),
  },
  {
    title: 'Focus on Your Logic',
    description: (
      <>
        ScouterUI provides a rich set of pre-built components, letting you
        focus on your application's core logic instead of reinventing the
        wheel.
      </>
    ),
  },
  {
    title: 'Cross-Platform & Customizable',
    description: (
      <>
        Built for React and React Native, ScouterUI components are fully
        themeable and customizable to match your brand, ensuring a consistent
        look and feel across web and mobile.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
