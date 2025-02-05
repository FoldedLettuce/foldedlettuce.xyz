import GradientBar from "../components/GradientBar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
    SiVisualstudiocode,
    SiDocker,
    SiGit,
    SiGo,
    SiNextdotjs as SiNextJs,
    SiNodedotjs as SiNodeJs,
    SiPostgresql,
    SiReact,
    SiRedis,
    SiStyledcomponents as SiStyledComponents,
    SiTailwindcss as SiTailwindCSS,
    SiTypescript,
    SiYarn,
    SiSwift,
    SiJavascript,
    SiPython,
    SiPrisma,
} from "react-icons/si";
import { TechItem } from "../components/TechItem";
import RepoItem from "../components/RepoItem";

interface AppProps {
    stats: Record<string, number>;
    topRepos: Record<any, any>;
}

const Index = ({ stats, topRepos }: AppProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.15 }}
            className="mt-24 w-full mb-32"
        >
            <h1 className="mt-36 font-bold text-4xl md:text-5xl mb-4">Hey, check my setups out!</h1>

            <h2 className="font-medium text-3xl mb-4">Desk</h2>
            <img src="https://cdn.discordapp.com/attachments/790304111111045160/1031410045113614417/IMG_4219.jpg" className="mb-6"></img>
            <img src="https://cdn.discordapp.com/attachments/790304111111045160/1031410044757086248/IMG_4221.jpg" className="mb-6"></img>
            <img src="https://cdn.discordapp.com/attachments/790304111111045160/1031410044367015986/IMG_4222.jpg" className="mb-6"></img>
            <img src="https://cdn.discordapp.com/attachments/790304111111045160/1031410043926626404/IMG_4223.jpg" className="mb-6"></img>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide">Computer:</p>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide">...</p>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mt-6">Peripherals:</p>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide">...</p>

            <h2 className="font-medium text-3xl mb-4">Home Lab</h2>
            <img src="https://i.imgur.com/OyxTsn6.jpg" className="mb-6"></img>
            <img src="https://i.imgur.com/VYMKQQD.jpg" className="mb-6"></img>
            <img src="https://i.imgur.com/pyPzqWA.jpg" className="mb-6"></img>
            <img src="https://i.imgur.com/9ter9AY.jpg" className="mb-6"></img>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mt-6">Equipment:</p>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide">- UniFi Dream Machine Pro</p>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide">- Rack Mount Blank Patch Panel 24-Port</p>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide">- UniFi USW 24 PoE </p>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide">- Rack Mount Blank Patch Panel 24-Port</p>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide">- APC 1200VA UPS</p>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide">- Synology DS220+</p>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide">- StarTech 6U Network Rack</p>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide">- 3x UniFi U6 Lite Access Points</p>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide">- 1x UniFi UAP AC Mesh</p>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide">- Unifi USW Aggregation (Not pictured)</p>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mt-6">Cabling:</p>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide">- UniFi Patch Cable's</p>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide">- UniFi 10 Gbps SFP+ Direct Attach Cable</p>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide">- trueCABLE Cat6 Outdoor｜Shielded - Black</p>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide">- trueCABLE Cat6 Riser｜Unshielded - White</p>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide">- trueCABLE Cat6 Punch Down Keystone Jack - White</p>
        </motion.div>
    );
};

export async function getStaticProps() {
    const stats = await fetch(`https://api.github-star-counter.workers.dev/user/foldedlettuce`).then(res => res.json());
    const repos = await fetch(`https://api.github.com/users/foldedlettuce/repos?type=owner&per_page=100`).then(res =>
        res.json()
    );

    const topRepos = repos
        .sort((a: Record<string, any>, b: Record<string, any>) => b.stargazers_count - a.stargazers_count)
        .slice(0, 4);

    return {
        props: { stats, topRepos },
        revalidate: 3600,
    };
}

export default Index;
