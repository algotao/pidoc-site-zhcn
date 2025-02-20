import clsx from 'clsx';
import { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const OSConfig = {
    rpios: '/img/downloads/rpi_os_bg.svg',
    osimages_text: "操作系统镜像",
    desc: "Raspberry Pi OS 是官方操作系统，配合 Imager 工具使用，可便捷的烧录到 SD 卡。",
    osimages_content1: 'Raspberry Pi 可使用许多操作系统，包括我们官方支持的操作系统 Raspberry Pi OS 和其他组织提供的操作系统。',
    osimages_content2: ' 是将操作系统安装到 microSD 卡上并与 Raspberry Pi 配套使用的快速简便方法。您也可以从以下操作系统中进行选择，下载并手动安装。',
    imager_url: { downloadurl: "/downloads", title: "Raspberry Pi Imager", showButton: false, },
    inner_url: [
        { linkto: "#raspberry-pi-os-64-bit", title: "Raspberry Pi OS(64位) *推荐*", showButton: false },
        { linkto: "#raspberry-pi-os-32-bit", title: "Raspberry Pi OS(32位)", showButton: false },
        { linkto: "#raspberry-pi-os-legacy-64-bit", title: "Raspberry Pi OS(传统, 64位)", showButton: false },
        { linkto: "#raspberry-pi-os-legacy-32-bit", title: "Raspberry Pi OS(传统, 32位)", showButton: false },
        { linkto: "#raspberry-pi-desktop", title: "Raspberry Pi 桌面", showButton: false },
    ],
    os: [
        {
            id: "raspberry-pi-os-64-bit",
            title: "Raspberry Pi OS(64位)",
            desc: "",
            compatible_list: [
                { name: "3B", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-b/" },
                { name: "3B+", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-b-plus/" },
                { name: "3A+", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-a-plus/" },
                { name: "4B", url: "https://www.raspberrypi.com/products/raspberry-pi-4-model-b/" },
                { name: "400", url: "https://www.raspberrypi.com/products/raspberry-pi-400/" },
                { name: "5", url: "https://www.raspberrypi.com/products/raspberry-pi-5/" },
                { name: "CM3", url: "https://www.raspberrypi.com/products/compute-module-io-board-v3/" },
                { name: "CM3+", url: "https://www.raspberrypi.com/products/compute-module-3-plus/" },
                { name: "CM4", url: "https://www.raspberrypi.com/products/compute-module-4/" },
                { name: "CM4S", url: "https://www.raspberrypi.com/products/compute-module-4s/" },
                { name: "CM5", url: "https://www.raspberrypi.com/products/compute-module-5/" },
                { name: "Zero 2 W", url: "https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/" },
            ],
            extos: [
                {
                    title: "Raspberry Pi OS(带桌面)",
                    download_url: "https://dl.pidoc.cn/raspios_arm64/images/raspios_arm64-2024-11-19/2024-11-19-raspios-bookworm-arm64.img.xz",
                    torrent_url: "https://dl.pidoc.cn/raspios_arm64/images/raspios_arm64-2024-11-19/2024-11-19-raspios-bookworm-arm64.img.xz.torrent",
                    archive_url: "https://dl.pidoc.cn/raspios_arm64/images/raspios_arm64-2024-11-19/",
                    release_notes_url: "https://dl.pidoc.cn/raspios_arm64/release_notes.txt",
                    sha256: "ea6e68c48d14c3d78af5471c0b288bbf6522fdd775241f74d8295d106d344300",
                    release_date: "2024-11-19",
                    system: "64位",
                    kernel_version: "6.6",
                    debian_version: "12(bookworm)",
                    image_size: "1,179MB",
                },
                {
                    title: "Raspberry Pi OS(带桌面和推荐软件)",
                    download_url: "https://dl.pidoc.cn/raspios_full_arm64/images/raspios_full_arm64-2024-11-19/2024-11-19-raspios-bookworm-arm64-full.img.xz",
                    torrent_url: "https://dl.pidoc.cn/raspios_full_arm64/images/raspios_full_arm64-2024-11-19/2024-11-19-raspios-bookworm-arm64-full.img.xz.torrent",
                    archive_url: "https://dl.pidoc.cn/raspios_full_arm64/images/raspios_full_arm64-2024-11-19/",
                    release_notes_url: "https://dl.pidoc.cn/raspios_full_arm64/release_notes.txt",
                    sha256: "cab33962e13528d84a75ba5d8ee0bb3457fd02fa6c2e90b5995c34f0c57d3648",
                    release_date: "2024-11-19",
                    system: "64位",
                    kernel_version: "6.6",
                    debian_version: "12(bookworm)",
                    image_size: "2,955MB",
                },
                {
                    title: "Raspberry Pi OS(精简版)",
                    download_url: "https://dl.pidoc.cn/raspios_lite_arm64/images/raspios_lite_arm64-2024-11-19/2024-11-19-raspios-bookworm-arm64-lite.img.xz",
                    torrent_url: "https://dl.pidoc.cn/raspios_lite_arm64/images/raspios_lite_arm64-2024-11-19/2024-11-19-raspios-bookworm-arm64-lite.img.xz.torrent",
                    archive_url: "https://dl.pidoc.cn/raspios_lite_arm64/images/raspios_lite_arm64-2024-11-19/",
                    release_notes_url: "https://dl.pidoc.cn/raspios_lite_arm64/release_notes.txt",
                    sha256: "6ac3a10a1f144c7e9d1f8e568d75ca809288280a593eb6ca053e49b539f465a4",
                    release_date: "2024-11-19",
                    system: "64位",
                    kernel_version: "6.6",
                    debian_version: "12(bookworm)",
                    image_size: "438MB",
                },
            ],
        },
        {
            id: "raspberry-pi-os-32-bit",
            title: "Raspberry Pi OS(32位)",
            desc: "我们推荐大多数用户使用的操作系统。",
            compatible_list: [
                { name: "所有 Raspberry Pi 型号", url: "https://www.raspberrypi.com/products/" },
            ],
            extos: [
                {
                    title: "Raspberry Pi OS(带桌面)",
                    download_url: "https://dl.pidoc.cn/raspios_armhf/images/raspios_armhf-2024-11-19/2024-11-19-raspios-bookworm-armhf.img.xz",
                    torrent_url: "https://dl.pidoc.cn/raspios_armhf/images/raspios_armhf-2024-11-19/2024-11-19-raspios-bookworm-armhf.img.xz.torrent",
                    archive_url: "https://dl.pidoc.cn/raspios_armhf/images/raspios_armhf-2024-11-19/",
                    release_notes_url: "https://dl.pidoc.cn/raspios_armhf/release_notes.txt",
                    sha256: "6af31270988e4e85e37162d9a07831c33c130e9e32d412ec6f7d16e38e8369d7",
                    release_date: "2024-11-19",
                    system: "32位",
                    kernel_version: "6.6",
                    debian_version: "12(bookworm)",
                    image_size: "1,177MB",
                },
                {
                    title: "Raspberry Pi OS(带桌面和推荐软件)",
                    download_url: "https://dl.pidoc.cn/raspios_full_armhf/images/raspios_full_armhf-2024-11-19/2024-11-19-raspios-bookworm-armhf-full.img.xz",
                    torrent_url: "https://dl.pidoc.cn/raspios_full_armhf/images/raspios_full_armhf-2024-11-19/2024-11-19-raspios-bookworm-armhf-full.img.xz.torrent",
                    archive_url: "https://dl.pidoc.cn/raspios_full_armhf/images/raspios_full_armhf-2024-111-19/",
                    release_notes_url: "https://dl.pidoc.cn/raspios_full_armhf/release_notes.txt",
                    sha256: "02bf12dd9cb66cc058d8fc5dcb2d196e36d64639d9b7fff40ea0b336095bec10",
                    release_date: "2024-11-19",
                    system: "32位",
                    kernel_version: "6.6",
                    debian_version: "12(bookworm)",
                    image_size: "2,727MB",
                },
                {
                    title: "Raspberry Pi OS(精简版)",
                    download_url: "https://dl.pidoc.cn/raspios_lite_armhf/images/raspios_lite_armhf-2024-11-19/2024-11-19-raspios-bookworm-armhf-lite.img.xz",
                    torrent_url: "https://dl.pidoc.cn/raspios_lite_armhf/images/raspios_lite_armhf-2024-11-19/2024-11-19-raspios-bookworm-armhf-lite.img.xz.torrent",
                    archive_url: "https://dl.pidoc.cn/raspios_lite_armhf/images/raspios_lite_armhf-2024-11-19/",
                    release_notes_url: "https://dl.pidoc.cn/raspios_lite_armhf/release_notes.txt",
                    sha256: "1dacc70cc09162c995020ac1739ee60e6843cf2bfb393654e694e3f017d781bb",
                    release_date: "2024-11-19",
                    system: "32位",
                    kernel_version: "6.6",
                    debian_version: "12(bookworm)",
                    image_size: "508MB",
                },
            ],
        },
        {
            id: "raspberry-pi-os-legacy-64-bit",
            title: "Raspberry Pi OS(传统, 64位)",
            desc: "",
            compatible_list: [
                { name: "3B", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-b/" },
                { name: "3B+", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-b-plus/" },
                { name: "3A+", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-a-plus/" },
                { name: "4B", url: "https://www.raspberrypi.com/products/raspberry-pi-4-model-b/" },
                { name: "400", url: "https://www.raspberrypi.com/products/raspberry-pi-400/" },
                { name: "CM3", url: "https://www.raspberrypi.com/products/compute-module-io-board-v3/" },
                { name: "CM3+", url: "https://www.raspberrypi.com/products/compute-module-3-plus/" },
                { name: "CM4", url: "https://www.raspberrypi.com/products/compute-module-4/" },
                { name: "CM4S", url: "https://www.raspberrypi.com/products/compute-module-4s/" },
                { name: "Zero 2 W", url: "https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/" },
            ],
            extos: [
                {
                    title: "Raspberry Pi OS(带桌面)",
                    download_url: "https://dl.pidoc.cn/raspios_oldstable_arm64/images/raspios_oldstable_arm64-2024-10-28/2024-10-22-raspios-bullseye-arm64.img.xz",
                    torrent_url: "https://dl.pidoc.cn/raspios_oldstable_arm64/images/raspios_oldstable_arm64-2024-10-28/2024-10-22-raspios-bullseye-arm64.img.xz.torrent",
                    archive_url: "https://dl.pidoc.cn/raspios_oldstable_arm64/images/raspios_oldstable_arm64-2024-10-28/",
                    release_notes_url: "https://dl.pidoc.cn/raspios_oldstable_arm64/release_notes.txt",
                    sha256: "eb6ec331b5da5058dcf38e1219039efc58f1a0c674453e974299d4a8d6afa22b",
                    release_date: "2024-10-22",
                    system: "64位",
                    kernel_version: "6.1",
                    debian_version: "11(bullseye)",
                    image_size: "868MB",
                },
                {
                    title: "Raspberry Pi OS(带桌面和推荐软件)",
                    download_url: "https://dl.pidoc.cn/raspios_oldstable_full_arm64/images/raspios_oldstable_full_arm64-2024-10-28/2024-10-22-raspios-bullseye-arm64-full.img.xz",
                    torrent_url: "https://dl.pidoc.cn/raspios_oldstable_full_arm64/images/raspios_oldstable_full_arm64-2024-10-28/2024-10-22-raspios-bullseye-arm64-full.img.xz.torrent",
                    archive_url: "https://dl.pidoc.cn/raspios_oldstable_full_arm64/images/raspios_oldstable_full_arm64-2024-10-28/",
                    release_notes_url: "https://dl.pidoc.cn/raspios_oldstable_full_arm64/release_notes.txt",
                    sha256: "66820e33453b7498b8afd202d8345df976b3f0adcc9d58a32ba4bf5af1610a14",
                    release_date: "2024-10-22",
                    system: "64位",
                    kernel_version: "6.1",
                    debian_version: "11(bullseye)",
                    image_size: "2,446MB",
                },
                {
                    title: "Raspberry Pi OS(精简版)",
                    download_url: "https://dl.pidoc.cn/raspios_oldstable_lite_arm64/images/raspios_oldstable_lite_arm64-2024-10-28/2024-10-22-raspios-bullseye-arm64-lite.img.xz",
                    torrent_url: "https://dl.pidoc.cn/raspios_oldstable_lite_arm64/images/raspios_oldstable_lite_arm64-2024-10-28/2024-10-22-raspios-bullseye-arm64-lite.img.xz.torrent",
                    archive_url: "https://dl.pidoc.cn/raspios_oldstable_lite_arm64/images/raspios_oldstable_lite_arm64-2024-10-28/",
                    release_notes_url: "https://dl.pidoc.cn/raspios_oldstable_lite_arm64/release_notes.txt",
                    sha256: "7413902e580c02baec9697a30467e99f0971c39cdff9826229da72da844a473b",
                    release_date: "2024-10-22",
                    system: "64位",
                    kernel_version: "6.1",
                    debian_version: "11(bullseye)",
                    image_size: "312MB",
                },
            ],
        },
        {
            id: "raspberry-pi-os-legacy-32-bit",
            title: "Raspberry Pi OS(传统, 32位)",
            desc: "稳定的 Raspberry Pi OS Bullseye 传统版本。",
            desclink: "https://www.raspberrypi.com/news/bookworm-the-new-version-of-raspberry-pi-os/",
            compatible_list: [
                { name: "Zero", url: "https://www.raspberrypi.com/products/raspberry-pi-zero/" },
                { name: "Zero W", url: "https://www.raspberrypi.com/products/raspberry-pi-zero-w/" },
                { name: "1A+", url: "https://www.raspberrypi.com/products/raspberry-pi-1-model-a-plus/" },
                { name: "1B+", url: "https://www.raspberrypi.com/products/raspberry-pi-1-model-b-plus/" },
                { name: "2B", url: "https://www.raspberrypi.com/products/raspberry-pi-2-model-b/" },
                { name: "3B", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-b/" },
                { name: "3B+", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-b-plus/" },
                { name: "3A+", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-a-plus/" },
                { name: "4B", url: "https://www.raspberrypi.com/products/raspberry-pi-4-model-b/" },
                { name: "400", url: "https://www.raspberrypi.com/products/raspberry-pi-400/" },
                { name: "CM1", url: "https://www.raspberrypi.com/products/compute-module-1/" },
                { name: "CM3", url: "https://www.raspberrypi.com/products/compute-module-io-board-v3/" },
                { name: "CM3+", url: "https://www.raspberrypi.com/products/compute-module-3-plus/" },
                { name: "CM4", url: "https://www.raspberrypi.com/products/compute-module-4/" },
                { name: "CM4S", url: "https://www.raspberrypi.com/products/compute-module-4s/" },
                { name: "Zero 2 W", url: "https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/" },
            ],
            extos: [
                {
                    title: "Raspberry Pi OS(带桌面)",
                    download_url: "https://dl.pidoc.cn/raspios_oldstable_armhf/images/raspios_oldstable_armhf-2024-10-28/2024-10-22-raspios-bullseye-armhf.img.xz",
                    torrent_url: "https://dl.pidoc.cn/raspios_oldstable_armhf/images/raspios_oldstable_armhf-2024-10-28/2024-10-22-raspios-bullseye-armhf.img.xz.torrent",
                    archive_url: "https://dl.pidoc.cn/raspios_oldstable_armhf/images/raspios_oldstable_armhf-2024-10-28/",
                    release_notes_url: "https://dl.pidoc.cn/raspios_oldstable_armhf/release_notes.txt",
                    sha256: "db2e27d790038318ae62c0e57534a8eba08e7a6b3737597248f8af875c54528f",
                    release_date: "2024-10-22",
                    system: "32位",
                    kernel_version: "6.1",
                    debian_version: "11(bullseye)",
                    image_size: "905MB",
                },
                {
                    title: "Raspberry Pi OS(带桌面和推荐软件)",
                    download_url: "https://dl.pidoc.cn/raspios_oldstable_full_armhf/images/raspios_oldstable_full_armhf-2024-10-28/2024-10-22-raspios-bullseye-armhf-full.img.xz",
                    torrent_url: "https://dl.pidoc.cn/raspios_oldstable_full_armhf/images/raspios_oldstable_full_armhf-2024-10-28/2024-10-22-raspios-bullseye-armhf-full.img.xz.torrent",
                    archive_url: "https://dl.pidoc.cn/raspios_oldstable_full_armhf/images/raspios_oldstable_full_armhf-2024-10-28/",
                    release_notes_url: "https://dl.pidoc.cn/raspios_oldstable_full_armhf/release_notes.txt",
                    sha256: "65bdc851e20d1451dd50bdb297a6b454d3051ddce4433e048545b09fddf4519e",
                    release_date: "2024-10-22",
                    system: "32位",
                    kernel_version: "6.1",
                    debian_version: "11(bullseye)",
                    image_size: "2,493MB",
                },
                {
                    title: "Raspberry Pi OS(精简版)",
                    download_url: "https://dl.pidoc.cn/raspios_oldstable_lite_armhf/images/raspios_oldstable_lite_armhf-2024-10-28/2024-10-22-raspios-bullseye-armhf-lite.img.xz",
                    torrent_url: "https://dl.pidoc.cn/raspios_oldstable_lite_armhf/images/raspios_oldstable_lite_armhf-2024-10-28/2024-10-22-raspios-bullseye-armhf-lite.img.xz.torrent",
                    archive_url: "https://dl.pidoc.cn/raspios_oldstable_lite_armhf/images/raspios_oldstable_lite_armhf-2024-10-28/",
                    release_notes_url: "https://dl.pidoc.cn/raspios_oldstable_lite_armhf/release_notes.txt",
                    sha256: "10a44eeb5f5bfd000b755425b93914add6c8f0590294189abdf7a9ac7297dc3b",
                    release_date: "2024-10-22",
                    system: "32位",
                    kernel_version: "6.1",
                    debian_version: "11(bullseye)",
                    image_size: "366MB",
                },
            ],
        },
        {
            id: "raspberry-pi-desktop",
            title: "Raspberry Pi 桌面",
            desc: "Debian with Raspberry Pi Desktop是我们适用于 PC 和 Mac 的操作系统。它为任何 PC 或 Apple Mac 计算机提供 Raspberry Pi OS 桌面以及 Raspberry Pi OS 附带的大多数推荐软件。",
            desc2: "如果您有一台旧计算机，功能不再强大，无法运行现代商业操作系统，请尝试使用 Raspberry Pi Desktop 的 Debian：它通常可以使计算机再次可用。",
            desc3: "您可以安装带有 Raspberry Pi Desktop 的 Debian作为计算机的主操作系统，在虚拟机中运行它，或者创建一个 USB 记忆棒或其他可以在需要时运行它的介质。",
            compatible_list: [
                { name: "PC 与 Mac", url: "" },
            ],
            extos: [
                {
                    title: "Raspberry Pi 桌面 (Debian Bullseye)",
                    download_url: "https://dl.pidoc.cn/rpd_x86/images/rpd_x86-2022-07-04/2022-07-01-raspios-bullseye-i386.iso",
                    torrent_url: "https://dl.pidoc.cn/rpd_x86/images/rpd_x86-2022-07-04/2022-07-01-raspios-bullseye-i386.iso.torrent",
                    archive_url: "https://dl.pidoc.cn/rpd_x86/images/",
                    release_notes_url: "https://dl.pidoc.cn/rpd_x86/images/release_notes.txt",
                    sha256: "5fa906df25e600bf7d7e6a5eb7b0e9b6605e60992ee6c8efe79bc99e7c2452bd",
                    release_date: "2022-07-01",
                    system: "32位",
                    kernel_version: "5.10",
                    debian_version: "11(bullseye)",
                    image_size: "3,440MB",
                },
            ],
        },
    ]
}


function OsImages() {
    return (
        <header className={clsx('hero', styles.small_hero)} >
            <div className="row">
                <div className="col col--6">
                    <Heading as="h1" className={clsx('hero__heading', styles.h1_header)}>
                        {OSConfig.osimages_text}
                    </Heading>
                    <p className={clsx("hero__context", styles.all_content)}>&emsp;&emsp;{OSConfig.osimages_content1}</p>
                    <p className={clsx("hero__context", styles.all_content)}>
                        <Link
                            to={OSConfig.imager_url.downloadurl}>
                            {OSConfig.imager_url.title}
                        </Link>
                        {OSConfig.osimages_content2}</p>
                </div>
                <div className={clsx("col col--6", styles.to_bottom)} align="right">
                    <br /><br />
                    <div className={clsx(styles.inner_url_box, styles.all_content)}>
                        下载：<br />
                        {
                            OSConfig.inner_url.map((props, index) => (
                                <Link key={index}
                                    className="button button--link button--lg"
                                    to={props.linkto}>
                                    {props.title}
                                </Link>
                            ))
                        }
                    </div>

                </div>
            </div>
        </ header >
    );
}

function OSDownloads(props) {
    return (
        <header className={clsx('hero', styles.short_hero)}>
            <div className='container'>
                <div className="row">
                    <Heading as="h3" className={clsx('hero__heading')}>
                        {props.title}
                    </Heading>
                </div>
                <div className="row">
                    <div className="col col--8">
                        <ul className={styles.info_ul}>
                            <li className={styles.info_li}>发布日期：{props.release_date}</li>
                            <li className={styles.info_li}>系统：{props.system}</li>
                            <li className={styles.info_li}>内核版本：{props.kernel_version}</li>
                            <li className={styles.info_li}>Debian版本：{props.debian_version}</li>
                            <li className={styles.info_li}>大小：{props.image_size}</li>
                            <li className={styles.info_li}><label className={styles.sh256link} onClick={() => sha256Info(props.sha256)}> 显示 SHA256 文件完整性哈希值 </label></li>
                            <span id={props.sha256} className={styles.sha256span}>{props.sha256}</span>
                            <li className={styles.info_li}><Link to={props.release_notes_url}> 发布说明 </Link></li>
                        </ul>
                    </div>
                    <div className="col col--4" align="right">
                        <Link className="button button--primary button--lg" to={props.download_url}> &emsp;下载OS&emsp; </Link><br /><br />
                        <Link to={props.torrent_url}> 下载Torrent </Link><br />
                        <Link to={props.archive_url}> 档案 </Link>
                    </div>
                </div>
            </div>
        </header >

    );
}

function OsList({ id, title, desc, desc2, desc3, extos, compatible_list }) {
    return (
        <section id={id}>
            <div className={styles.red_line}></div>
            <header className={clsx('hero', styles.small_hero)}>
                <div className='container'>
                    <div className="row">
                        <div className="col col--4">
                            <Heading as="h2" className={clsx('hero__heading')}>
                                {title}
                            </Heading>
                            {desc != "" && desc != undefined && <p>&emsp;{desc}</p>}
                            {desc2 != "" && desc2 != undefined && <p>&emsp;{desc2}</p>}
                            {desc3 != "" && desc3 != undefined && <p>&emsp;{desc3}</p>}
                            <span className={styles.all_content}>兼容：</span>
                            <ul>
                                {
                                    compatible_list.map((props, index) => (
                                        <CompatibleList key={index + 1000} {...props} />
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="col col--8">
                            {
                                extos.map((props, index) => (
                                    <OSDownloads key={index + 10000} {...props} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </header >
        </section>
    );
}

function CompatibleList({ name, url }) {
    return (
        <li className={styles.compatibilities_li}>
            {url != "" &&
                <Link className={styles.compatibilities_btn}
                    to={url}>
                    {name}
                </Link>
            }
            {url == "" &&
                <p className={styles.all_content}>{name}</p>
            }
        </li >
    )
}

function sha256Info(sha256) {
    const span = document.getElementById(sha256);
    if (span.style.display === "none" || span.style.display === "") {
        span.style.display = "block";
    } else {
        span.style.display = "none";
    }
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={OSConfig.header_text}
            description={OSConfig.desc}>
            <div className={clsx('container', styles.all_header)}>
                <OsImages />
                {
                    OSConfig.os.map((props, index) => (
                        <OsList key={index + 100} {...props} />
                    ))
                }
            </div>
        </Layout>
    );
}