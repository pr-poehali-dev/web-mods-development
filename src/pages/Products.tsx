import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link, useLocation } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Products = () => {
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
          <Link to="/" className="inline-flex items-center gap-2 text-[#00D9FF] hover:text-[#9D4EDD] transition-colors mb-6">
            <Icon name="ArrowLeft" size={24} />
            <span className="text-lg">Назад на главную</span>
          </Link>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#9D4EDD] via-[#00D9FF] to-[#FF6B35] mb-4">
            Наши Продукты
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Полная информация о наших услугах и возможностях
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-4xl font-heading text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#9D4EDD] to-[#00D9FF]">
            Разработка Сайтов
          </h2>
          <Card className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 border-[#9D4EDD]/30 p-8 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-heading text-white mb-4">Что входит в услугу</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-[#9D4EDD] mt-1" />
                    <span className="text-gray-300">Современный адаптивный дизайн для всех устройств</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-[#9D4EDD] mt-1" />
                    <span className="text-gray-300">SEO оптимизация для поисковых систем</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-[#9D4EDD] mt-1" />
                    <span className="text-gray-300">Интеграция с игровыми серверами</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-[#9D4EDD] mt-1" />
                    <span className="text-gray-300">Панель администратора для управления контентом</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-[#9D4EDD] mt-1" />
                    <span className="text-gray-300">Система регистрации и авторизации игроков</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-[#9D4EDD] mt-1" />
                    <span className="text-gray-300">Донат-система с автоматической выдачей привилегий</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-heading text-white mb-4">Тарифы</h3>
                <div className="space-y-4">
                  <div className="bg-[#1a1a2e]/50 p-4 rounded-lg border border-[#9D4EDD]/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold text-white">Базовый</span>
                      <span className="text-2xl font-bold text-[#00D9FF]">2 000 ₽</span>
                    </div>
                    <p className="text-sm text-gray-400">Простой одностраничный сайт с основной информацией о сервере</p>
                  </div>
                  <div className="bg-[#1a1a2e]/50 p-4 rounded-lg border border-[#9D4EDD]/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold text-white">Стандартный</span>
                      <span className="text-2xl font-bold text-[#00D9FF]">4 000 ₽</span>
                    </div>
                    <p className="text-sm text-gray-400">Многостраничный сайт с админ-панелью и базовой донат-системой</p>
                  </div>
                  <div className="bg-[#1a1a2e]/50 p-4 rounded-lg border border-[#9D4EDD]/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold text-white">Премиум</span>
                      <span className="text-2xl font-bold text-[#00D9FF]">6 000 ₽</span>
                    </div>
                    <p className="text-sm text-gray-400">Полнофункциональный сайт с интеграциями, статистикой и кастомными фичами</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-heading text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD]">
            Разработка Форумов
          </h2>
          <Card className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 border-[#00D9FF]/30 p-8 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-heading text-white mb-4">Возможности форума</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-[#00D9FF] mt-1" />
                    <span className="text-gray-300">Модульная структура разделов и подразделов</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-[#00D9FF] mt-1" />
                    <span className="text-gray-300">Система рангов и репутации пользователей</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-[#00D9FF] mt-1" />
                    <span className="text-gray-300">Расширенные права для модераторов и администраторов</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-[#00D9FF] mt-1" />
                    <span className="text-gray-300">Система личных сообщений</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-[#00D9FF] mt-1" />
                    <span className="text-gray-300">Уведомления о новых сообщениях</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-[#00D9FF] mt-1" />
                    <span className="text-gray-300">Интеграция с игровым аккаунтом</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-heading text-white mb-4">Стоимость</h3>
                <div className="space-y-4">
                  <div className="bg-[#1a1a2e]/50 p-4 rounded-lg border border-[#00D9FF]/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold text-white">Базовый</span>
                      <span className="text-2xl font-bold text-[#9D4EDD]">1 000 ₽</span>
                    </div>
                    <p className="text-sm text-gray-400">Простой форум с базовыми функциями и разделами</p>
                  </div>
                  <div className="bg-[#1a1a2e]/50 p-4 rounded-lg border border-[#00D9FF]/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold text-white">Расширенный</span>
                      <span className="text-2xl font-bold text-[#9D4EDD]">3 000 ₽</span>
                    </div>
                    <p className="text-sm text-gray-400">Форум с полным функционалом, интеграциями и кастомным дизайном</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-heading text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#9D4EDD]">
            Запуск Игровых Серверов
          </h2>
          <Card className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 border-[#FF6B35]/30 p-8 backdrop-blur-sm">
            <div className="mb-8">
              <h3 className="text-2xl font-heading text-white mb-4">Поддерживаемые платформы</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#1a1a2e]/50 p-6 rounded-lg border border-[#FF6B35]/20 text-center">
                  <Icon name="Gamepad2" size={48} className="text-[#FF6B35] mx-auto mb-3" />
                  <h4 className="text-xl font-heading text-white mb-2">GTA V</h4>
                  <p className="text-sm text-gray-400">FiveM, RageMP, Alt:V</p>
                </div>
                <div className="bg-[#1a1a2e]/50 p-6 rounded-lg border border-[#FF6B35]/20 text-center">
                  <Icon name="Gamepad2" size={48} className="text-[#FF6B35] mx-auto mb-3" />
                  <h4 className="text-xl font-heading text-white mb-2">SAMP</h4>
                  <p className="text-sm text-gray-400">SA:MP 0.3.7, 0.3DL</p>
                </div>
                <div className="bg-[#1a1a2e]/50 p-6 rounded-lg border border-[#FF6B35]/20 text-center">
                  <Icon name="Gamepad2" size={48} className="text-[#FF6B35] mx-auto mb-3" />
                  <h4 className="text-xl font-heading text-white mb-2">CRMP</h4>
                  <p className="text-sm text-gray-400">CR:MP последние версии</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-heading text-white mb-4">Что мы разрабатываем</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-[#FF6B35] mt-1" />
                    <span className="text-gray-300">Уникальные игровые моды и скрипты</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-[#FF6B35] mt-1" />
                    <span className="text-gray-300">Системы работ, домов, транспорта</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-[#FF6B35] mt-1" />
                    <span className="text-gray-300">Фракции и организации</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-[#FF6B35] mt-1" />
                    <span className="text-gray-300">Экономическая система</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-[#FF6B35] mt-1" />
                    <span className="text-gray-300">Админ-панель и инструменты модерации</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-[#FF6B35] mt-1" />
                    <span className="text-gray-300">Оптимизация производительности сервера</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-heading text-white mb-4">Условия разработки</h3>
                <div className="space-y-4">
                  <div className="bg-[#1a1a2e]/50 p-4 rounded-lg border border-[#FF6B35]/20">
                    <div className="flex items-start gap-3 mb-2">
                      <Icon name="DollarSign" size={20} className="text-[#FF6B35] mt-1" />
                      <div>
                        <p className="text-white font-semibold">Индивидуальная стоимость</p>
                        <p className="text-sm text-gray-400">Цена рассчитывается на основе сложности проекта и требуемого функционала</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#1a1a2e]/50 p-4 rounded-lg border border-[#FF6B35]/20">
                    <div className="flex items-start gap-3 mb-2">
                      <Icon name="Clock" size={20} className="text-[#FF6B35] mt-1" />
                      <div>
                        <p className="text-white font-semibold">Сроки разработки</p>
                        <p className="text-sm text-gray-400">От 1 недели для базовых модов до 1-2 месяцев для сложных проектов</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#1a1a2e]/50 p-4 rounded-lg border border-[#FF6B35]/20">
                    <div className="flex items-start gap-3 mb-2">
                      <Icon name="Shield" size={20} className="text-[#FF6B35] mt-1" />
                      <div>
                        <p className="text-white font-semibold">Техподдержка</p>
                        <p className="text-sm text-gray-400">Бесплатные исправления ошибок в течение 30 дней после запуска</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#1a1a2e]/50 p-4 rounded-lg border border-[#FF6B35]/20">
                    <div className="flex items-start gap-3 mb-2">
                      <Icon name="Server" size={20} className="text-[#FF6B35] mt-1" />
                      <div>
                        <p className="text-white font-semibold">Хостинг и домен</p>
                        <p className="text-sm text-gray-400">Помощь в выборе и настройке хостинга, подключение домена</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="text-center py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-heading mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD]">
              Готовы обсудить ваш проект?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Свяжитесь с нами для получения индивидуального предложения
            </p>
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;