import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient-shift bg-400%"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/quiz-bg.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Main Content Card */}
      <div className="relative z-10 text-center bg-white/5 backdrop-blur-2xl p-12 rounded-3xl shadow-2xl max-w-md w-full mx-4 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-[0_10px_40px_-15px_rgba(255,255,255,0.3)]">
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent hover:border-white/10 pointer-events-none transition-all duration-700"></div>
        
        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200 mb-6 leading-tight tracking-tight">
          MCQ CHALLENGE
        </h1>
        
        <p className="text-xl text-white/80 mb-8 font-medium">
          Prove your knowledge in this electrifying quiz experience!
        </p>
        
        <Link
          to="/quiz"
          className="relative inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-10 py-4 rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 font-bold text-lg group overflow-hidden"
        >
          <span className="relative z-10 flex items-center">
            START QUIZ 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Link>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-100px) translateX(20px); }
          100% { transform: translateY(0) translateX(0); }
        }
        .animate-gradient-shift {
          animation: gradient-shift 12s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default Home;