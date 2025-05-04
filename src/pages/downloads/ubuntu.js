import clsx from 'clsx';
import { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const OSConfig = {
    rpios: '/img/downloads/rpi_os_bg.svg',
    osimages_text: "Ubuntu 操作系统",
    desc: "Raspberry Pi OS 是官方操作系统，配合 Imager 工具使用，可便捷的烧录到 SD 卡。",
    osimages_content1: 'Raspberry Pi 支持 Ubuntu，开源开发人员可以快速、安全地启动和运行 Raspberry Pi。',
    osimages_content2: ' 是将操作系统安装到 microSD 卡上并与 Raspberry Pi 配套使用的快速简便方法。您也可以从以下操作系统中进行选择，下载并手动安装。',
    imager_url: { downloadurl: "/downloads", title: "Raspberry Pi Imager", showButton: false, },
    inner_url: [
        { linkto: "#ubuntu-2404-lts", title: "Ubuntu 24.04.2 LTS *推荐*", showButton: false },
        { linkto: "#ubuntu-2504", title: "Ubuntu 25.04", showButton: false },
        { linkto: "#ubuntu-2410", title: "Ubuntu 24.10", showButton: false },
        { linkto: "#ubuntu-2204-lts", title: "Ubuntu 22.04.5 LTS", showButton: false },
        { linkto: "#ubuntu-2004-lts", title: "Ubuntu 20.04.5 LTS", showButton: false },
        { linkto: "#ubuntu-core", title: "Ubuntu Core for IoT", showButton: false },
    ],
    os: [
        {
            id: "ubuntu-2404-lts",
            title: "Ubuntu 24.04.2 LTS (推荐)",
            desc: "Ubuntu 的最新 LTS 版本。LTS 代表长期支持，这意味着五年的免费安全和维护更新。",
            extos: [
                {
                    title: "Ubuntu 24.04.2 LTS Desktop(桌面)",
                    download_url: "https://dl.pidoc.cn/releases/noble/release/ubuntu-24.04.2-preinstalled-desktop-arm64+raspi.img.xz",
                    release_date: "2025-02-15",
                    system: "64位",
                    image_size: "2,745MB",
                    compatible_list: [
                        { name: "4B", url: "https://www.raspberrypi.com/products/raspberry-pi-4-model-b/" },
                        { name: "400", url: "https://www.raspberrypi.com/products/raspberry-pi-400/" },
                        { name: "5", url: "https://www.raspberrypi.com/products/raspberry-pi-5/" },
                        { name: "CM4", url: "https://www.raspberrypi.com/products/compute-module-4/" },
                        { name: "CM4S", url: "https://www.raspberrypi.com/products/compute-module-4s/" },
                    ],
                },
                {
                    title: "Ubuntu 24.04.2 LTS Server(64位)",
                    download_url: "https://dl.pidoc.cn/releases/noble/release/ubuntu-24.04.2-preinstalled-server-arm64+raspi.img.xz",
                    release_date: "2025-02-15",
                    system: "64位",
                    image_size: "1,143MB",
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
                        { name: "Zero 2 W", url: "https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/" },                            ],
                }
            ],
        },
        {
            id: "ubuntu-2504",
            title: "Ubuntu 25.04",
            desc: "Ubuntu 25.04 是 Ubuntu 操作系统的最新版本，提供九个月的安全和维护更新，直至 2026 年 1 月。",
            extos: [
                {
                    title: "Ubuntu 25.04 Desktop(桌面)",
                    download_url: "https://dl.pidoc.cn/releases/plucky/release/ubuntu-25.04-preinstalled-desktop-arm64+raspi.img.xz",
                    release_date: "2025-04-17",
                    system: "64位",
                    image_size: "2,924MB",
                    compatible_list: [
                        { name: "4B", url: "https://www.raspberrypi.com/products/raspberry-pi-4-model-b/" },
                        { name: "400", url: "https://www.raspberrypi.com/products/raspberry-pi-400/" },
                        { name: "5", url: "https://www.raspberrypi.com/products/raspberry-pi-5/" },
                        { name: "500", url: "https://www.raspberrypi.com/products/raspberry-pi-500//" },
                        { name: "CM4", url: "https://www.raspberrypi.com/products/compute-module-4/" },
                        { name: "CM4S", url: "https://www.raspberrypi.com/products/compute-module-4s/" },
                        { name: "CM5", url: "https://www.raspberrypi.com/products/compute-module-5/" },
                    ],
                },
                {
                    title: "Ubuntu 25.04 Server(64位)",
                    download_url: "https://dl.pidoc.cn/releases/plucky/release/ubuntu-25.04-preinstalled-server-arm64+raspi.img.xz",
                    release_date: "2025-04-17",
                    system: "64位",
                    image_size: "1,234MB",
                    compatible_list: [
                        { name: "3B", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-b/" },
                        { name: "3B+", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-b-plus/" },
                        { name: "3A+", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-a-plus/" },
                        { name: "4B", url: "https://www.raspberrypi.com/products/raspberry-pi-4-model-b/" },
                        { name: "400", url: "https://www.raspberrypi.com/products/raspberry-pi-400/" },
                        { name: "5", url: "https://www.raspberrypi.com/products/raspberry-pi-5/" },
                        { name: "500", url: "https://www.raspberrypi.com/products/raspberry-pi-500//" },
                        { name: "CM3", url: "https://www.raspberrypi.com/products/compute-module-io-board-v3/" },
                        { name: "CM3+", url: "https://www.raspberrypi.com/products/compute-module-3-plus/" },
                        { name: "CM4", url: "https://www.raspberrypi.com/products/compute-module-4/" },
                        { name: "CM4S", url: "https://www.raspberrypi.com/products/compute-module-4s/" },
                        { name: "CM5", url: "https://www.raspberrypi.com/products/compute-module-5/" },
                        { name: "Zero 2 W", url: "https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/" },                            ],
                }
            ],
        },
        {
            id: "ubuntu-2410",
            title: "Ubuntu 24.10",
            desc: "",
            extos: [
                {
                    title: "Ubuntu 24.10 Desktop(桌面)",
                    download_url: "https://dl.pidoc.cn/releases/oracular/release/ubuntu-24.10-preinstalled-desktop-arm64+raspi.img.xz",
                    release_date: "2024-10-10",
                    system: "64位",
                    image_size: "2,783MB",
                    compatible_list: [
                        { name: "4B", url: "https://www.raspberrypi.com/products/raspberry-pi-4-model-b/" },
                        { name: "400", url: "https://www.raspberrypi.com/products/raspberry-pi-400/" },
                        { name: "5", url: "https://www.raspberrypi.com/products/raspberry-pi-5/" },
                        { name: "500", url: "https://www.raspberrypi.com/products/raspberry-pi-500//" },
                        { name: "CM4", url: "https://www.raspberrypi.com/products/compute-module-4/" },
                        { name: "CM4S", url: "https://www.raspberrypi.com/products/compute-module-4s/" },
                        { name: "CM5", url: "https://www.raspberrypi.com/products/compute-module-5/" },
                    ],
                },
                {
                    title: "Ubuntu 24.10 Server(64位)",
                    download_url: "https://dl.pidoc.cn/releases/oracular/release/ubuntu-24.10-preinstalled-server-arm64+raspi.img.xz",
                    release_date: "2024-10-10",
                    system: "64位",
                    image_size: "1,163MB",
                    compatible_list: [
                        { name: "3B", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-b/" },
                        { name: "3B+", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-b-plus/" },
                        { name: "3A+", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-a-plus/" },
                        { name: "4B", url: "https://www.raspberrypi.com/products/raspberry-pi-4-model-b/" },
                        { name: "400", url: "https://www.raspberrypi.com/products/raspberry-pi-400/" },
                        { name: "5", url: "https://www.raspberrypi.com/products/raspberry-pi-5/" },
                        { name: "500", url: "https://www.raspberrypi.com/products/raspberry-pi-500//" },
                        { name: "CM3", url: "https://www.raspberrypi.com/products/compute-module-io-board-v3/" },
                        { name: "CM3+", url: "https://www.raspberrypi.com/products/compute-module-3-plus/" },
                        { name: "CM4", url: "https://www.raspberrypi.com/products/compute-module-4/" },
                        { name: "CM4S", url: "https://www.raspberrypi.com/products/compute-module-4s/" },
                        { name: "CM5", url: "https://www.raspberrypi.com/products/compute-module-5/" },
                        { name: "Zero 2 W", url: "https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/" },                            ],
                }
            ],
        },
        {
            id: "ubuntu-2204-lts",
            title: "Ubuntu 22.04.5 LTS",
            desc: "",
            extos: [
                {
                    title: "Ubuntu 22.04.5 LTS Desktop(桌面)",
                    download_url: "https://dl.pidoc.cn/releases/jammy/release/ubuntu-22.04.5-preinstalled-desktop-arm64+raspi.img.xz",
                    release_date: "2024-09-12",
                    system: "64位",
                    image_size: "2,152MB",
                    compatible_list: [
                        { name: "4B", url: "https://www.raspberrypi.com/products/raspberry-pi-4-model-b/" },
                        { name: "400", url: "https://www.raspberrypi.com/products/raspberry-pi-400/" },
                        { name: "CM4", url: "https://www.raspberrypi.com/products/compute-module-4/" },
                        { name: "CM4S", url: "https://www.raspberrypi.com/products/compute-module-4s/" },
                    ],
                },
                {
                    title: "Ubuntu 22.04.5 LTS Server(64位)",
                    download_url: "https://dl.pidoc.cn/releases/jammy/release/ubuntu-22.04.5-preinstalled-server-arm64+raspi.img.xz",
                    release_date: "2024-09-12",
                    system: "64位",
                    image_size: "990MB",
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
                        { name: "Zero 2 W", url: "https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/" },                            ],
                },
                {
                    title: "Ubuntu 22.04.5 LTS Server(32位)",
                    download_url: "https://dl.pidoc.cn/releases/jammy/release/ubuntu-22.04.5-preinstalled-server-armhf+raspi.img.xz",
                    release_date: "2024-09-12",
                    system: "32位",
                    image_size: "950MB",
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
                        { name: "Zero 2 W", url: "https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/" },                            ],
                }
            ],
        },
        {
            id: "ubuntu-2004-lts",
            title: "Ubuntu 20.04.5 LTS",
            desc: "",
            extos: [
                {
                    title: "Ubuntu 20.04.5 LTS Server(64位)",
                    download_url: "https://dl.pidoc.cn/releases/focal/release/ubuntu-20.04.5-preinstalled-server-arm64+raspi.img.xz",
                    release_date: "2022-09-01",
                    system: "64位",
                    image_size: "544MB",
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
                        { name: "Zero 2 W", url: "https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/" },                            ],
                },
                {
                    title: "Ubuntu 20.04.5 LTS Server(32位)",
                    download_url: "https://dl.pidoc.cn/releases/focal/release/ubuntu-20.04.5-preinstalled-server-armhf+raspi.img.xz",
                    release_date: "2022-09-01",
                    system: "32位",
                    image_size: "715MB",
                    compatible_list: [
                        { name: "2B", url: "https://www.raspberrypi.com/products/raspberry-pi-2-model-b/" },
                        { name: "3B", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-b/" },
                        { name: "3B+", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-b-plus/" },
                        { name: "3A+", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-a-plus/" },
                        { name: "4B", url: "https://www.raspberrypi.com/products/raspberry-pi-4-model-b/" },
                        { name: "400", url: "https://www.raspberrypi.com/products/raspberry-pi-400/" },
                        { name: "CM3", url: "https://www.raspberrypi.com/products/compute-module-io-board-v3/" },
                        { name: "CM3+", url: "https://www.raspberrypi.com/products/compute-module-3-plus/" },
                        { name: "CM4", url: "https://www.raspberrypi.com/products/compute-module-4/" },
                        { name: "CM4S", url: "https://www.raspberrypi.com/products/compute-module-4s/" },
                        { name: "Zero 2 W", url: "https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/" },                            ],
                }
            ],
        },
        {
            id: "ubuntu-core",
            title: "Ubuntu Core for IoT",
            desc: "一种不可变的、严格限制的操作系统，专为部署物联网 (IoT) 用例而设计，重点关注安全性和简化维护，Core 24 支持至 2036 年。",
            extos: [
                {
                    title: "Ubuntu Core 24 (64位)",
                    download_url: "https://dl.pidoc.cn/ubuntu-core/24/stable/current/ubuntu-core-24-arm64+raspi.img.xz",
                    release_date: "2024-06-04",
                    system: "64位",
                    image_size: "314MB",
                    compatible_list: [
                        { name: "3B", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-b/" },
                        { name: "3B+", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-b-plus/" },
                        { name: "3A+", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-a-plus/" },
                        { name: "4B", url: "https://www.raspberrypi.com/products/raspberry-pi-4-model-b/" },
                        { name: "400", url: "https://www.raspberrypi.com/products/raspberry-pi-400/" },
                        { name: "5", url: "https://www.raspberrypi.com/products/raspberry-pi-5/" },
                        { name: "500", url: "https://www.raspberrypi.com/products/raspberry-pi-500//" },
                        { name: "CM3", url: "https://www.raspberrypi.com/products/compute-module-io-board-v3/" },
                        { name: "CM3+", url: "https://www.raspberrypi.com/products/compute-module-3-plus/" },
                        { name: "CM4", url: "https://www.raspberrypi.com/products/compute-module-4/" },
                        { name: "CM4S", url: "https://www.raspberrypi.com/products/compute-module-4s/" },
                        { name: "CM5", url: "https://www.raspberrypi.com/products/compute-module-5/" },
                        { name: "Zero 2 W", url: "https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/" },                            ],
                },
                {
                    title: "Ubuntu Core 22 (64位)",
                    download_url: "https://dl.pidoc.cn/ubuntu-core/22/stable/current/ubuntu-core-22-arm64+raspi.img.xz",
                    release_date: "2023-07-17",
                    system: "64位",
                    image_size: "262MB",
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
                        { name: "Zero 2 W", url: "https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/" },                            ],
                },
                {
                    title: "Ubuntu Core 22 (32位)",
                    download_url: "https://dl.pidoc.cn/ubuntu-core/22/stable/current/ubuntu-core-22-armhf+raspi.img.xz",
                    release_date: "2023-07-17",
                    system: "32位",
                    image_size: "245MB",
                    compatible_list: [
                        { name: "2B", url: "https://www.raspberrypi.com/products/raspberry-pi-2-model-b/" },
                        { name: "3B", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-b/" },
                        { name: "3B+", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-b-plus/" },
                        { name: "3A+", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-a-plus/" },
                        { name: "4B", url: "https://www.raspberrypi.com/products/raspberry-pi-4-model-b/" },
                        { name: "400", url: "https://www.raspberrypi.com/products/raspberry-pi-400/" },
                        { name: "CM3", url: "https://www.raspberrypi.com/products/compute-module-io-board-v3/" },
                        { name: "CM3+", url: "https://www.raspberrypi.com/products/compute-module-3-plus/" },
                        { name: "CM4", url: "https://www.raspberrypi.com/products/compute-module-4/" },
                        { name: "CM4S", url: "https://www.raspberrypi.com/products/compute-module-4s/" },
                        { name: "Zero 2 W", url: "https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/" },                            ],
                },
                {
                    title: "Ubuntu Core 20 (64位)",
                    download_url: "https://dl.pidoc.cn/ubuntu-core/20/stable/current/ubuntu-core-20-arm64+raspi.img.xz",
                    release_date: "2023-01-19",
                    system: "64位",
                    image_size: "243MB",
                    compatible_list: [
                        { name: "3B", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-b/" },
                        { name: "3B+", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-b-plus/" },
                        { name: "3A+", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-a-plus/" },
                        { name: "4B", url: "https://www.raspberrypi.com/products/raspberry-pi-4-model-b/" },
                        { name: "400", url: "https://www.raspberrypi.com/products/raspberry-pi-400/" },
                        { name: "CM3", url: "https://www.raspberrypi.com/products/compute-module-io-board-v3/" },
                        { name: "CM3+", url: "https://www.raspberrypi.com/products/compute-module-3-plus/" },
                        { name: "CM4", url: "https://www.raspberrypi.com/products/compute-module-4/" },
                        { name: "CM4S", url: "https://www.raspberrypi.com/products/compute-module-4s/" },                        ],
                },
                {
                    title: "Ubuntu Core 20 (32位)",
                    download_url: "https://dl.pidoc.cn/ubuntu-core/20/stable/current/ubuntu-core-20-armhf+raspi.img.xz",
                    release_date: "2023-01-19",
                    system: "32位",
                    image_size: "227MB",
                    compatible_list: [
                        { name: "2B", url: "https://www.raspberrypi.com/products/raspberry-pi-2-model-b/" },
                        { name: "3B", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-b/" },
                        { name: "3B+", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-b-plus/" },
                        { name: "3A+", url: "https://www.raspberrypi.com/products/raspberry-pi-3-model-a-plus/" },
                        { name: "4B", url: "https://www.raspberrypi.com/products/raspberry-pi-4-model-b/" },
                        { name: "400", url: "https://www.raspberrypi.com/products/raspberry-pi-400/" },
                        { name: "CM3", url: "https://www.raspberrypi.com/products/compute-module-io-board-v3/" },
                        { name: "CM3+", url: "https://www.raspberrypi.com/products/compute-module-3-plus/" },
                        { name: "CM4", url: "https://www.raspberrypi.com/products/compute-module-4/" },
                        { name: "CM4S", url: "https://www.raspberrypi.com/products/compute-module-4s/" },                       ],
                }
            ],
        }
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
                        <span className={styles.info_li}>兼容：</span>
                            <ul>
                                {
                                    props.compatible_list.map((props, index) => (
                                        <CompatibleList key={index + 1000} {...props} />
                                    ))
                                }
                            </ul>
                            <br />
                            <li className={styles.info_li}>发布日期：{props.release_date}</li>
                            <li className={styles.info_li}>系统：{props.system}</li>
                            <li className={styles.info_li}>大小：{props.image_size}</li>
                        </ul>
                    </div>
                    <div className="col col--4" align="right">
                        <Link className="button button--primary button--lg" to={props.download_url}> &emsp;下载OS&emsp; </Link><br /><br />
                    </div>
                </div>
            </div>
        </header >

    );
}

function OsList({ id, title, desc, desc2, desc3, extos }) {
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
                <Link className={styles.compatibilities_btn_s}
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