import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f1624]">
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
                        <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.11 14.37c-.32.39-.9.53-1.53.53-.47 0-.99-.08-1.53-.16-.73-.11-1.48-.23-2.17-.02-.96.29-1.83.92-2.67 1.52-.33.24-.68.48-1.03.7-.42.26-.85.39-1.27.39-.87 0-1.52-.62-1.77-1.68-.29-1.25-.36-2.53-.43-3.76-.04-.74-.08-1.49-.18-2.22-.04-.32.07-.65.3-.86.23-.22.55-.32.88-.28 1.63.18 3.27.27 4.89.27 1.35 0 2.69-.07 4.02-.2.36-.04.72.08.98.32.26.24.39.59.35.94-.13 1.16-.29 2.32-.53 3.45-.1.47-.21.94-.31 1.41v.01l.01-.36z"/>
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