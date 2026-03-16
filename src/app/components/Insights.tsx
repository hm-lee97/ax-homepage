import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { getAllPosts, Post } from '../lib/posts';
import { InsightModal } from './InsightModal';

const posts = getAllPosts();

export function Insights() {
  const [selected, setSelected] = useState<Post | null>(null);

  return (
    <>
      <section className="w-full h-screen bg-[#F5F5F5] overflow-hidden flex items-center pt-[72px]" id="인사이트">
        <div className="mx-auto px-8 md:px-14 max-w-[1400px] w-full">

          <div className="flex items-end justify-between mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <h2 className="text-[48px] md:text-[60px] font-bold text-[#1A1A1A] tracking-[-0.03em] leading-[1.0]">AX Insights</h2>
              <p className="text-[15px] text-[#555] mt-3">AI와 경험 설계가 만드는 디지털 전환 인사이트</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 + i * 0.08 }}
                onClick={() => setSelected(post)}
                className="group cursor-pointer flex flex-col bg-white rounded-[14px] overflow-hidden border border-[rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-full overflow-hidden" style={{ height: '190px' }}>
                  <img
                    src={post.thumbnail}
                    alt={post.category}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-[12px] font-semibold text-[#9932CC] tracking-[0.15em] uppercase mb-2">{post.category}</div>
                  <h3 className="text-[18px] font-semibold text-[#1A1A1A] leading-[1.35] mb-2 whitespace-pre-line">{post.title}</h3>
                  <p className="text-[13px] text-[#555] leading-[1.6] mb-4 flex-grow">{post.summary}</p>
                  <span className="text-[13px] font-medium text-[#9932CC] flex items-center gap-1">
                    Read insight <ArrowRight size={12} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <InsightModal post={selected} onClose={() => setSelected(null)} />
    </>
  );
}
