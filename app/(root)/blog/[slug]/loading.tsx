// app/blog/[slug]/loading.tsx

export default function Loading() {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="w-20 h-20 border-4 border-green-700 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  