import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/computers/getting-started">
            学习文档从“入门”开始
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Raspberry Pi树莓派官网的中文版文档，为树莓派学习者提供了全面的学习资源。从入门知识学起，涵盖系统安装、配置、底层config.txt配置、硬件参数以及内核编译等内容。同时，还介绍了树莓派的各类配件，如摄像头、音频、显示器等，以及微控制器，像Pico、RP2040等，还有相关的调试工具和开发套件，能帮助用户全面了解和深入学习树莓派相关知识与技术。">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
