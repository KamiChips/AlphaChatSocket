interface UsersProps {
  users: string[];
  className?: string;
}

export default function Users({ users, className = "" }: UsersProps) {
  return (
    <aside
      className={`
        w-64 h-100vh
        bg-linear-to-b from-[#3c75f3] to-[#7665cc] text-white left-0 top-20 bottom-30 fixed z-40
        p-6
        ${className}
      `}
    >
      <h2 className="text-xl font-semibold mb-6">
        Usuarios
      </h2>

      <div className="space-y-3">
        {users.length === 0 ? (
          <p className="text-sm opacity-70">
            No hay usuarios conectados
          </p>
        ) : (
          users.map((user, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/10 p-2 rounded-lg"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>{user}</span>
            </div>
          ))
        )}
      </div>
    </aside>
  );
}