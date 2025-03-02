import clsx from 'clsx';
import { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';


const DownloadConfig = {
  rpios: '/img/downloads/rpi_os_bg.svg',
  rpiimager: '/img/downloads/rpi_imager.png',
  rpimanually: '/img/downloads/rpi_manually.svg',
  rpidesktop: '/img/downloads/rpi_desktop.png',
  header_text: "Raspberry Pi OS 下载",
  header_content: '您的 Raspberry Pi 需要一个操作系统才能工作。这就是它。Raspberry Pi OS（以前称为 Raspbian）是我们官方支持的操作系统。',
  imager_text: "使用 Raspberry Pi Imager 安装树莓派操作系统",
  imager_content1: 'Raspberry Pi Imager 是将 Raspberry Pi OS 和其他操作系统安装到 microSD 卡的快速简便方法，可随时与 Raspberry Pi 一起使用。',
  imager_content2: '将 Raspberry Pi Imager 下载并安装到带有 SD 卡阅读器的电脑上。将与 Raspberry Pi 一起使用的 SD 卡放入读卡器，然后运行 Raspberry Pi Imager。',
  manually_text: "手动安装树莓派操作系统",
  manually_content: '如果您不想使用 Raspberry Pi Imager，您可以手动安装树莓派操作系统。请参阅我们的安装指南。',
  desktop_text: "适用于 PC 和 Mac 的 Raspberry Pi 桌面",
  desktop_content: 'Debian with Raspberry Pi Desktop 是我们的 PC 和 Mac 操作系统。它为任何 PC 或苹果 Mac 电脑提供 Raspberry Pi OS 桌面以及 Raspberry Pi OS 附带的大多数推荐软件。',
  imager_url: [
    { os: "Windows", downloadurl: "https://dl.pidoc.cn/imager/imager_1.8.5.exe", title: "下载Windows版", showButton: false, },
    { os: "MacOS", downloadurl: "https://dl.pidoc.cn/imager/imager_1.8.5.dmg", title: "下载macOS版", showButton: false, },
    { os: "Linux", downloadurl: "https://dl.pidoc.cn/imager/imager_1.8.5_amd64.deb", title: "下载适用于x64的Ubuntu版", showButton: false, }
  ],
  manually_url: [
    { os: "All", downloadurl: "/downloads/operating-systems/", title: "查看所有下载选项", showButton: true, },
  ],
  desktop_url: [
    { os: "All", downloadurl: "/downloads/operating-systems/#raspberry-pi-desktop", title: "下载选项Raspberry Pi Desktop", showButton: true, },
  ],
}

function getOperatingSystem() {
  const userAgent = window.navigator.userAgent;
  if (userAgent.includes('Win')) {
    return 'Windows';
  } else if (userAgent.includes('Mac')) {
    return 'MacOS';
  } else if (userAgent.includes('Linux')) {
    return 'Linux';
  } else if (userAgent.includes('iPhone') || userAgent.includes('iPad') || userAgent.includes('iPod')) {
    return 'iOS';
  } else if (userAgent.includes('Android')) {
    return 'Android';
  } else {
    return 'Unknown';
  }
}

function DownloadUrl(props) {
  return (
    <div>
      {
        props.showButton &&
        <Link
          className="button button--primary button--lg"
          to={props.downloadurl}>
          {props.title}
        </Link>
      }
      {
        !props.showButton &&
        <Link
          className="button button--link button--lg"
          to={props.downloadurl}>
          {props.title}
        </Link>
      }
    </div>
  )
}

function Downloads({ urls }) {
  const sortedImageUrl = urls;
  const [downloadUrls, setDownloadUrls] = useState([]);
  useEffect(() => {
    const userOperatingSystem = getOperatingSystem();
    sortImageUrlByOperatingSystem(userOperatingSystem);
    if (sortedImageUrl[0].os === userOperatingSystem) {
      sortedImageUrl[0].showButton = true;
    }

    setDownloadUrls(sortedImageUrl)
  }, []);

  function sortImageUrlByOperatingSystem(userOperatingSystem) {
    sortedImageUrl.sort((a, b) => {
      if (a.os === userOperatingSystem) {
        return -1;
      } else if (b.os === userOperatingSystem) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  return (
    <div>
      {
        //console.log(sortedImageUrl),
        downloadUrls.map((props, index) => (
          < DownloadUrl key={index} {...props} />
        ))
      }
    </div >
  )
}

function SoftwareHeader() {
  return (
    <header className={clsx('hero')}>
      <div className={clsx('container', styles.os_bg)}>
        <Heading as="h1" className={clsx('hero__heading', styles.h1_header)}>
          {DownloadConfig.header_text}
        </Heading>
        <p className={clsx("hero__context", styles.header_content, styles.os_content)}>&emsp;&emsp;{DownloadConfig.header_content}</p>
      </div>
    </header >
  );
}

function Imager() {
  return (
    <header className={clsx('hero', styles.gray_bg)}>
      <div className="row">
        <div className="col col--6">
          <Heading as="h2" className={clsx('hero__heading')}>
            {DownloadConfig.imager_text}
          </Heading>
          <p className={clsx("hero__context", styles.all_content)}>&emsp;&emsp;{DownloadConfig.imager_content1}</p>
          <p className={clsx("hero__context", styles.all_content)}>&emsp;&emsp;{DownloadConfig.imager_content2}</p>
          <Downloads urls={DownloadConfig.imager_url} />
          <p className={clsx("hero__context", styles.imager_termial_download)}>在 <strong>Raspberry Pi OS</strong> 上安装，请在终端窗口输入<br /> <code>sudo apt install rpi-imager </code> </p>
        </div>
        <div className="col col--6" align="center">
          <div><img src={DownloadConfig.rpiimager} sizes="(min-width: 1584px) 1584px, 100vw" width="520" /></div>
        </div>
      </div>
    </header >
  );
}

function Manually() {
  return (
    <header className={clsx('hero')}>
      <div className="row">
        <div className="col col--6">
          <Heading as="h2" className={clsx('hero__heading')}>
            {DownloadConfig.manually_text}
          </Heading>
          <p className={clsx("hero__context", styles.all_content)}>&emsp;&emsp;{DownloadConfig.manually_content}</p>
          <Downloads urls={DownloadConfig.manually_url} />
        </div>
        <div className="col col--6" align="center">
          <div><img src={DownloadConfig.rpimanually} width="419" /></div>
        </div>
      </div>
    </header >
  );
}

function Desktop() {
  return (
    <header className={clsx('hero')}>
      <div className="row">
        <div className="col col--6">
          <Heading as="h2" className={clsx('hero__heading')}>
            {DownloadConfig.desktop_text}
          </Heading>
          <p className={clsx("hero__context", styles.all_content)}>&emsp;&emsp;{DownloadConfig.desktop_content}</p>
          <Downloads urls={DownloadConfig.desktop_url} />
        </div>
        <div className="col col--6" align="center">
          <div><img src={DownloadConfig.rpidesktop} width="419" /></div>
        </div>
      </div>
    </header >
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={DownloadConfig.header_text}
      description={DownloadConfig.header_text}>
      <div className={clsx('container', styles.all_header)}>
        <SoftwareHeader />
        <Imager />
        <Manually />
        <Desktop />
      </div>
    </Layout>
  );
}
