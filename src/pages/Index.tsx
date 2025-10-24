import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link, useLocation } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Index = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f1624] relative">
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        <Link to="/" className="group">
          <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
            isHomePage 
              ? 'bg-gradient-to-r from-[#9D4EDD] to-[#00D9FF] scale-125' 
              : 'bg-white/30 hover:bg-white/50 hover:scale-110'
          }`}>
            <div className="absolute left-full ml-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-[#1a1a2e]/90 px-3 py-1 rounded-lg text-sm text-white">
              Главная
            </div>
          </div>
        </Link>
        <Link to="/products" className="group">
          <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
            !isHomePage 
              ? 'bg-gradient-to-r from-[#9D4EDD] to-[#00D9FF] scale-125' 
              : 'bg-white/30 hover:bg-white/50 hover:scale-110'
          }`}>
            <div className="absolute left-full ml-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-[#1a1a2e]/90 px-3 py-1 rounded-lg text-sm text-white">
              Продукты
            </div>
          </div>
        </Link>
      </div>
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-16 animate-fade-in">
          <div className="relative inline-block mb-6">
            <h1 className="text-6xl md:text-8xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#9D4EDD] via-[#00D9FF] to-[#FF6B35] animate-glow">
              GAME DEV STUDIO
            </h1>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#FF6B35] rounded-full blur-2xl opacity-50 animate-glow"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#00D9FF] rounded-full blur-2xl opacity-50 animate-glow"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Разработка уникальных модов для серверов • Создание сайтов и форумов
          </p>
        </header>

        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-heading text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#9D4EDD] to-[#00D9FF]">
            Наши Услуги
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 border-[#9D4EDD]/30 p-8 hover:scale-105 transition-transform duration-300 animate-scale-in backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#9D4EDD] to-[#7E69AB] flex items-center justify-center flex-shrink-0">
                  <Icon name="Globe" size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading text-white mb-3">Создание сайтов</h3>
                  <p className="text-gray-400 mb-4">
                    Профессиональная разработка сайтов для игровых проектов с современным дизайном и удобным интерфейсом
                  </p>
                  <div className="flex items-center gap-2 text-[#00D9FF]">
                    <Icon name="Check" size={20} />
                    <span className="font-semibold">Адаптивный дизайн</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#00D9FF] mt-2">
                    <Icon name="Check" size={20} />
                    <span className="font-semibold">SEO оптимизация</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 border-[#00D9FF]/30 p-8 hover:scale-105 transition-transform duration-300 animate-scale-in backdrop-blur-sm" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00D9FF] to-[#0EA5E9] flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageSquare" size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading text-white mb-3">Создание форумов</h3>
                  <p className="text-gray-400 mb-4">
                    Современные форумы для вашего игрового сообщества с удобной системой управления контентом
                  </p>
                  <div className="flex items-center gap-2 text-[#9D4EDD]">
                    <Icon name="Check" size={20} />
                    <span className="font-semibold">Модульная структура</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#9D4EDD] mt-2">
                    <Icon name="Check" size={20} />
                    <span className="font-semibold">Система рангов</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 border-[#FF6B35]/30 p-8 hover:scale-105 transition-transform duration-300 animate-scale-in backdrop-blur-sm md:col-span-2" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#F97316] flex items-center justify-center flex-shrink-0">
                  <Icon name="Gamepad2" size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading text-white mb-3">Разработка модов для серверов</h3>
                  <p className="text-gray-400 mb-4">
                    Разработка серверных обеспечений для игровых серверов типа GTA V, CRMP, SAMP с высокой производительностью и стабильностью
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="flex items-center gap-2 text-[#FF6B35]">
                      <Icon name="Zap" size={20} />
                      <span className="font-semibold">GTA V</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#FF6B35]">
                      <Icon name="Zap" size={20} />
                      <span className="font-semibold">SAMP</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#FF6B35]">
                      <Icon name="Zap" size={20} />
                      <span className="font-semibold">CRMP</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#9D4EDD]">
            Прайс-лист
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-[#9D4EDD]/20 to-[#7E69AB]/10 border-[#9D4EDD]/50 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#9D4EDD] flex items-center justify-center">
                  <Icon name="Globe" size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-heading text-white">Оформление сайта</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">От базового</span>
                  <span className="text-2xl font-bold text-[#00D9FF]">2 000 ₽</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">До сложного</span>
                  <span className="text-2xl font-bold text-[#00D9FF]">6 000 ₽</span>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  Стоимость зависит от сложности дизайна и функционала
                </p>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-[#00D9FF]/20 to-[#0EA5E9]/10 border-[#00D9FF]/50 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#00D9FF] flex items-center justify-center">
                  <Icon name="MessageSquare" size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-heading text-white">Оформление форума</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">От базового</span>
                  <span className="text-2xl font-bold text-[#9D4EDD]">1 000 ₽</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">До сложного</span>
                  <span className="text-2xl font-bold text-[#9D4EDD]">3 000 ₽</span>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  Цена варьируется в зависимости от требуемого функционала
                </p>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-[#FF6B35]/20 to-[#F97316]/10 border-[#FF6B35]/50 p-8 md:col-span-2 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#FF6B35] flex items-center justify-center">
                  <Icon name="Server" size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-heading text-white">Запуск игрового сервера</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-[#FF6B35] mt-1" />
                  <div>
                    <p className="text-white font-semibold">Индивидуальный расчет стоимости</p>
                    <p className="text-gray-400 text-sm">Цена зависит от выбранного типа мода и требований</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-[#FF6B35] mt-1" />
                  <div>
                    <p className="text-white font-semibold">Стабильность и производительность</p>
                    <p className="text-gray-400 text-sm">Оптимизация под нагрузку и высокий онлайн</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-[#FF6B35] mt-1" />
                  <div>
                    <p className="text-white font-semibold">Полный пакет услуг</p>
                    <p className="text-gray-400 text-sm">Включает в себя разработку мода, подключение хостинга и домена</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="text-center py-16 animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD]">
              Готовы начать?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-[#9D4EDD] to-[#7E69AB] hover:from-[#7E69AB] hover:to-[#6E59A5] text-white px-8 py-6 text-lg rounded-xl transition-all hover:scale-105">
                    <Icon name="Send" size={20} className="mr-2" />
                    Связаться с нами
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border-[#9D4EDD]/30 text-white">
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-heading text-transparent bg-clip-text bg-gradient-to-r from-[#9D4EDD] to-[#00D9FF] mb-4">
                      Свяжитесь с нами
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <a
                      href="https://t.me/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#0088cc]/20 to-[#0088cc]/10 hover:from-[#0088cc]/30 hover:to-[#0088cc]/20 border border-[#0088cc]/30 rounded-xl transition-all hover:scale-105 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#0088cc] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon name="Send" size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-heading text-white">Telegram</h3>
                      </div>
                    </a>

                    <a
                      href="https://vk.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#0077FF]/20 to-[#0077FF]/10 hover:from-[#0077FF]/30 hover:to-[#0077FF]/20 border border-[#0077FF]/30 rounded-xl transition-all hover:scale-105 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#0077FF] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.524-2.049-1.708-1.038-1.034-1.487-1.17-1.745-1.17-.356 0-.458.102-.458.593v1.563c0 .424-.135.678-1.253.678-1.846 0-3.896-1.119-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.27-1.422 2.168-3.609 2.168-3.609.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-heading text-white">ВКонтакте</h3>
                      </div>
                    </a>

                    <a
                      href="https://discord.gg/yourinvite"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#5865F2]/20 to-[#5865F2]/10 hover:from-[#5865F2]/30 hover:to-[#5865F2]/20 border border-[#5865F2]/30 rounded-xl transition-all hover:scale-105 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#5865F2] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon name="MessageCircle" size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-heading text-white">Discord</h3>
                      </div>
                    </a>
                  </div>
                </DialogContent>
              </Dialog>
              <Link to="/products">
                <Button variant="outline" className="border-[#00D9FF] text-[#00D9FF] hover:bg-[#00D9FF]/10 px-8 py-6 text-lg rounded-xl transition-all hover:scale-105">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Узнать больше
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;