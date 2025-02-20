import { motion } from "framer-motion";

import "./Join.css";
const JoinCommunity = () => {
return (
    <div className="containerr">
    <div className="join-community">
        <h2 className="title">Rejoignez la <br /><span className="mot">Communauté</span> </h2>
        <p className="text">
            Rejoignez notre communauté Discord en cours de création et faite par des joueurs pour des joueurs. Tout le monde est le bienvenu, peu importe le jeu auquel vous jouez. Nous sommes ici pour passer un bon moment.
        </p>
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="join-community-button"
        >
            <a href="https://discord.com/channels/679875946597056683/805450902940811285" >🚀 Rejoindre la Communauté</a>
        </motion.button>
    </div>
    </div>
);
};

export default JoinCommunity;
