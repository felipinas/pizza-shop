import { Pizza } from "lucide-react";
import { Outlet } from "react-router-dom";

export function AuthLayout() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <Pizza className="h5 w-5" />

          <span className="font-semibold">pizza.shop</span>
        </div>

        <footer className="text-sm">
          Painel do parceiro &copy; pizza.shop - {currentYear}
        </footer>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
