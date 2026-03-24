import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { SiPinterest } from "react-icons/si";
import type { Board } from "../backend.d";
import { sampleBoards } from "../data/sampleData";

const boardColors = [
  "from-amber-100 to-orange-100",
  "from-rose-100 to-pink-100",
  "from-emerald-100 to-teal-100",
  "from-violet-100 to-purple-100",
];

const boardEmojis = ["🏡", "🛏️", "🍳", "🌿"];

function PinterestBoardCard({ board, index }: { board: Board; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-card rounded-card shadow-card hover:shadow-card-hover transition-shadow overflow-hidden flex flex-col"
      data-ocid={`boards.item.${index + 1}`}
    >
      {/* Board preview area */}
      <div className="relative" style={{ minHeight: "220px" }}>
        {/* Pinterest embed (loads async via SDK) */}
        <div className="pinterest-embed-wrapper absolute inset-0">
          <a
            data-pin-do="embedBoard"
            data-pin-board-width="100%"
            data-pin-scale-height="220"
            data-pin-scale-width="100%"
            href={board.boardUrl}
            aria-label={`View ${board.boardName} on Pinterest`}
          >
            {board.boardName}
          </a>
        </div>
        {/* Fallback gradient (visible until Pinterest SDK replaces it) */}
        <div
          className={`fallback-board absolute inset-0 bg-gradient-to-br ${boardColors[index % boardColors.length]} flex items-center justify-center pointer-events-none`}
          aria-hidden="true"
        >
          <span className="text-6xl">
            {boardEmojis[index % boardEmojis.length]}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3
          className="font-serif font-semibold text-lg mb-1.5"
          style={{ color: "oklch(0.18 0.02 45)" }}
        >
          {board.boardName}
        </h3>
        <p
          className="text-sm flex-1 mb-4"
          style={{ color: "oklch(0.52 0.022 55)" }}
        >
          {board.description}
        </p>
        <a
          href={board.boardUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-75"
          style={{ color: "#E60023" }}
          data-ocid={`boards.link.${index + 1}`}
        >
          <SiPinterest className="w-4 h-4" />
          Follow on Pinterest
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.article>
  );
}

export function PinterestBoards({ boards }: { boards?: Board[] }) {
  const displayBoards = boards && boards.length > 0 ? boards : sampleBoards;

  return (
    <section
      id="boards"
      className="py-20 px-4"
      style={{ backgroundColor: "oklch(0.916 0.024 68)" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "#E60023" }}
          >
            Pinterest
          </p>
          <h2
            className="font-serif text-3xl sm:text-4xl font-bold"
            style={{ color: "oklch(0.18 0.02 45)" }}
          >
            Inspiring Pinterest Boards
          </h2>
          <p
            className="mt-3 text-base max-w-xl mx-auto"
            style={{ color: "oklch(0.52 0.022 55)" }}
          >
            Follow along for daily home decor inspo across every style and room.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayBoards.map((board, i) => (
            <PinterestBoardCard key={board.boardUrl} board={board} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.pinterest.com/Homediscoveries2688/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold border transition-transform hover:scale-105"
            style={{
              borderColor: "#E60023",
              color: "#E60023",
              backgroundColor: "transparent",
            }}
            data-ocid="boards.primary_button"
          >
            <SiPinterest className="w-4 h-4" />
            View All Boards on Pinterest
          </a>
        </motion.div>
      </div>
    </section>
  );
}
