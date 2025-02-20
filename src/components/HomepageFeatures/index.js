import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '树莓派',
    url: '/docs/computers/',
    png: '/img/main/Getting-Started.png',
    description: (
      <>
        从这里学习树莓派入门的系统安装、系统配置、config.txt底层配置、硬件参数、内核编译等知识。
      </>
    ),
  },
  {
    title: '配件',
    url: '/docs/accessories/',
    png: '/img/main/Keyboard-and-Mouse.png',
    description: (
      <>
        摄像头、音频、显示器、键盘鼠标、HAT等
      </>
    ),
  },
  {
    title: '微控制器',
    url: '/docs/microcontrollers/',
    png: '/img/main/Tutorials.png',
    description: (
      <>
        Pico、RP2040、RP1、Debug Probe、MicroPython、C/C++ SDK
      </>
    ),
  },
];

function Feature({ title, description, url, png }) {
  return (
    <div className={clsx('col col--4')}>

      <div className="text--center">
        <a href={url}>
          <img src={png} width="200px" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>

    </div>
  );
}

export default function HomepageFeatures() {
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
