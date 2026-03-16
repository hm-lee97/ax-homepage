import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Post, parseMarkdown } from '../lib/posts';

interface Props {
  post: Post | null;
  onClose: () => void;
}

export function InsightModal({ post, onClose }: Props) {
  useEffect(() => {
    if (!post) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [post, onClose]);

  return (
    <AnimatePresence>
      {post && (
        <motion.div
          className="fixed inset-0 z-[500] flex items-center justify-center p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-white rounded-[20px] w-full max-w-[780px] max-h-[88vh] overflow-hidden flex flex-col shadow-2xl"
            initial={{ scale: 0.96, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
          >
            {/* Thumbnail */}
            <div className="w-full h-[220px] md:h-[280px] overflow-hidden flex-shrink-0">
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
            >
              <X size={18} />
            </button>

            {/* Content */}
            <div className="overflow-y-auto flex-1 px-8 md:px-12 py-8">
              <div className="text-[12px] font-semibold text-[#9932CC] tracking-[0.15em] uppercase mb-3">
                {post.category}
              </div>
              <h2 className="text-[26px] md:text-[32px] font-bold text-[#1A1A1A] leading-[1.25] mb-2 whitespace-pre-line">
                {post.title}
              </h2>
              <p className="text-[13px] text-[#999] mb-8">{post.date}</p>

              {/* Markdown body */}
              <div
                className="prose prose-sm md:prose-base max-w-none
                  prose-headings:font-bold prose-headings:text-[#1A1A1A]
                  prose-h2:text-[20px] prose-h2:mt-8 prose-h2:mb-3
                  prose-h3:text-[16px] prose-h3:mt-6 prose-h3:mb-2
                  prose-p:text-[#444] prose-p:leading-[1.8]
                  prose-li:text-[#444] prose-li:leading-[1.8]
                  prose-strong:text-[#1A1A1A]
                  prose-code:bg-[#F5F5F5] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[#9932CC] prose-code:text-[13px]
                  prose-pre:bg-[#F5F5F5] prose-pre:rounded-xl
                  prose-table:text-[14px] prose-th:bg-[#F5F5F5] prose-th:font-semibold
                  prose-a:text-[#9932CC] prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
