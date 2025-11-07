import { useEffect, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const languages = useMemo(
    () => [
      { code: "EN", label: "English" },
      { code: "ES", label: "Español" },
      { code: "FR", label: "Français" },
      { code: "PT", label: "Português" },
      { code: "HI", label: "हिन्दी" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClassNames = scrolled
    ? "bg-[#0D1B3A]/85 backdrop-blur-xl border-b border-white/10 shadow-lg"
    : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${navClassNames}`}
    >
      <div className="container mx-auto px-6 py-6">
        {/* Top Bar with CTA */}
        <div className="flex items-center justify-end gap-2 pb-3">
          <span className="text-gold-gradient text-xs font-semibold uppercase tracking-[0.2em]">
            CALL US NOW FOR A FREE CONSULTATION
          </span>
          <button className="px-5 py-2 bg-gold-gradient text-[#1A2037] font-bold text-sm uppercase tracking-wide rounded-md shadow-lg transition-transform hover:-translate-y-0.5">
            +1 (919) 328 -1881
          </button>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-white font-extrabold leading-[0.92] tracking-tight lowercase relative">
              <span className="block text-[42px]">alonzi law</span>
              <span className="block text-[42px]">group</span>
              <span className="absolute -right-6 top-[10px] h-5 w-5 rounded-full border border-white flex items-center justify-center text-[10px] font-semibold uppercase">
                c
              </span>
            </div>
          </div>

          {/* Center: Language Selector */}
          {/* Right: Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-7">
            <a href="#home" className="text-white hover:text-accent transition-colors font-semibold text-sm uppercase tracking-[0.18em]">
              HOME
            </a>
            <a href="#solutions" className="text-white hover:text-accent transition-colors font-semibold text-sm uppercase tracking-[0.18em]">
              OUR SOLUTIONS
            </a>
            <a href="#practice-areas" className="text-white hover:text-accent transition-colors font-semibold text-sm uppercase tracking-[0.18em]">
              PRACTICE AREAS
            </a>
            <a href="#blog" className="text-white hover:text-accent transition-colors font-semibold text-sm uppercase tracking-[0.18em]">
              BLOG
            </a>
            <a href="#pricing" className="text-white hover:text-accent transition-colors font-semibold text-sm uppercase tracking-[0.18em]">
              PRICING
            </a>
            <a href="#contact" className="text-white hover:text-accent transition-colors font-semibold text-sm uppercase tracking-[0.18em]">
              CONTACT US
            </a>
            <div
              className="relative"
              onMouseEnter={() => setLanguageMenuOpen(true)}
              onMouseLeave={() => setLanguageMenuOpen(false)}
            >
              <DropdownMenu open={languageMenuOpen} onOpenChange={setLanguageMenuOpen}>
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex items-center gap-2 px-6 py-2.5 border border-accent text-white transition-colors font-semibold text-sm uppercase tracking-[0.18em] rounded-md bg-transparent hover:bg-accent hover:text-accent-foreground"
                    onClick={(event) => event.preventDefault()}
                  >
                    {language}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="min-w-[10rem] border border-accent/40 bg-[#0D1B3A]/95 text-white backdrop-blur-md"
                  onMouseEnter={() => setLanguageMenuOpen(true)}
                  onMouseLeave={() => setLanguageMenuOpen(false)}
                >
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onSelect={() => {
                        setLanguage(lang.code);
                        setLanguageMenuOpen(false);
                      }}
                      className={`flex items-center justify-between text-sm uppercase tracking-[0.12em] px-3 py-2 focus:bg-accent/15 focus:text-accent ${
                        language === lang.code ? "text-accent" : ""
                      }`}
                    >
                      <span>{lang.code}</span>
                      <span className="text-xs font-medium tracking-wide text-white/60">{lang.label}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
