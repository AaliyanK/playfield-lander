"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import { ImageCard } from "@/components/ImageCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Nav />

      {/* Home Section */}
      <section id="home" className="mx-auto max-w-[880px] px-6 mt-8">
        <motion.h1
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading text-[40px] md:text-[48px] leading-tight tracking-tight"
        >
          Superintelligence for Enterprise
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="mt-3 text-black/80 text-[15px] leading-relaxed"
        >
          We&apos;re a product & research lab building models that interact with
          your enterprise systems. From reading/writing data across applications
          to generating interfaces for you to interact with, we believe in a
          future where operators in an enterprise only have to interact with one
          model to complete all their tasks, and software/interfaces are
          generated just-in-time to carry out the intent of the operator.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
          className="mt-3 text-black/80 text-[15px] leading-relaxed"
        >
          We&apos;re focusing on post-training coding models to work with your
          systems, rather than building static agent workflows. Our aim is to
          bring RL to enterprise in order to train models to deeply understand
          how you do your work, and deliver specialized superintelligence to our
          customers. Code is the most verifiable model output for RL today.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="mt-3 text-black/80 text-[15px] leading-relaxed"
        >
          We look forward to sharing more with you in the near future.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
          className="mt-3 text-black/80 text-[15px] leading-relaxed"
        >
          Thanks,
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="mt-1 text-black/80 text-[15px] leading-relaxed"
        >
          <a
            href="https://www.linkedin.com/in/zayaan-mulla-95412b1b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-black transition-colors"
          >
            Zayaan
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/parsa-bahrami/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-black transition-colors"
          >
            Parsa
          </a>
        </motion.p>
        <motion.hr
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 border-t border-[color:var(--rule)]"
        />
      </section>

      {/* Four white image cards (2×2) */}
      <section className="mx-auto max-w-[880px] px-6 mt-10 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <ImageCard
              title="Reasoning Map of your Enterprise"
              desc="The ontology that bridges your systems, data and learns from your workflows."
              imageSrc="/images/reasoning-map.png"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <ImageCard
              title="Code Generation as a Primitive"
              desc="Our models are trained to take actions over your ontology and generate interfaces to interact with it, through code."
              imageSrc="/images/code-gen.png"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <ImageCard
              title="RL-as-a-Service"
              desc=" We work with you to build evals and continuously fine tune models to generate code that is more accurate relative to the needs of your enterprise. This becomes your enterprise super-intelligence."
              imageSrc="/images/rl-service.png"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <ImageCard
              title="Enterprise Privacy"
              desc="We focus on seat-by-seat auth, on-prem/vpc deployment and security so you fully own your models."
              imageSrc="/images/vpc-deployments.png"
            />
          </motion.div>
        </div>
      </section>

      {/* Vision Section - Commented Out
      <section id="vision" className="mx-auto max-w-[880px] px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading text-[32px] md:text-[40px] leading-tight tracking-tight"
        >
          Vision
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="mt-3 text-black/80 text-[15px] leading-relaxed"
        >
          Enterprise reasoning is our goal. Our research lab explores the frontiers
          of AI reasoning, while our product team translates breakthroughs into
          production-ready solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="mt-8"
        >
          <ResearchVisualization />
        </motion.div>
      </section>
      */}

      {/* Footer */}
      <footer className="mx-auto max-w-[880px] px-6 py-8 border-t border-[color:var(--rule)]">
        <div className="text-center">
          <p className="text-black/60 text-[13px] font-mono">
            © 2025 Playfield.
          </p>
          {/* <p className="text-black/60 text-[13px] font-mono mt-1">
            hello@playfield.ai
          </p> */}
        </div>
      </footer>
    </div>
  );
}
