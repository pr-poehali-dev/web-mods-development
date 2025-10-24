import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f1624]">
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
                        <p className="text-sm text-gray-400">Быстрая связь через мессенджер</p>
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
                          <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.11 14.37c-.32.39-.9.53-1.53.53-.47 0-.99-.08-1.53-.16-.73-.11-1.48-.23-2.17-.02-.96.29-1.83.92-2.67 1.52-.33.24-.68.48-1.03.7-.42.26-.85.39-1.27.39-.87 0-1.52-.62-1.77-1.68-.29-1.25-.36-2.53-.43-3.76-.04-.74-.08-1.49-.18-2.22-.04-.32.07-.65.3-.86.23-.22.55-.32.88-.28 1.63.18 3.27.27 4.89.27 1.35 0 2.69-.07 4.02-.2.36-.04.72.08.98.32.26.24.39.59.35.94-.13 1.16-.29 2.32-.53 3.45-.1.47-.21.94-.31 1.41v.01l.01-.36z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-heading text-white">ВКонтакте</h3>
                        <p className="text-sm text-gray-400">Сообщество и поддержка</p>
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
                        <p className="text-sm text-gray-400">Наш Discord сервер</p>
                      </div>
                    </a>

                    <a
                      href="mailto:your@email.com"
                      className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF6B35]/10 hover:from-[#FF6B35]/30 hover:to-[#FF6B35]/20 border border-[#FF6B35]/30 rounded-xl transition-all hover:scale-105 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#FF6B35] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon name="Mail" size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-heading text-white">Email</h3>
                        <p className="text-sm text-gray-400">Напишите нам письмо</p>
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