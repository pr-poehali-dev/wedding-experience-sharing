import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-20 md:py-32 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/0d6798cd-7b97-4fc9-9a9d-1e3416171141/files/8cf4e5fb-6f37-4c43-8e02-7c30b685198f.jpg)' }}
        />
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground leading-tight">
              Готовитесь к свадьбе в Воронеже в 2026 году?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Устали от рекламы без цен и накрученных отзывов? Вступайте в чат «Свадьба в Воронеже» – здесь такие же пары, как вы, показывают итоговые чеки и делятся честными отзывами
            </p>
            <div className="space-y-4">
              <div className="p-6 rounded-xl border-l-4 border-accent" style={{ backgroundColor: '#F9F7F8' }}>
                <p className="text-base md:text-lg text-foreground font-medium">
                  Присоединяйся в Telegram-чат «Свадьба в Воронеже»: реальные чеки, отзывы и идеи от тех, кто готовится к свадьбе в 2026. Бесплатно для новых участников до конца месяца.
                </p>
              </div>
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:opacity-90 transition-opacity w-full md:w-auto"
              >
                Вступить в чат
              </Button>
              <p className="text-sm text-muted-foreground">
                Бесплатно для новых участников до конца месяца. Без рекламы и спама.
              </p>
            </div>
          </div>
          <div className="animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/projects/0d6798cd-7b97-4fc9-9a9d-1e3416171141/files/dd63cfb4-5bb8-4edb-9905-9902e20f7034.jpg" 
              alt="Невеста с букетом" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-accent/10 to-transparent" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/0d6798cd-7b97-4fc9-9a9d-1e3416171141/files/f56ac42e-7981-4346-a26b-0e10d8bf4145.jpg" 
                alt="Счастливая пара молодожёнов" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-12 order-1 md:order-2">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 text-destructive font-medium">
                <Icon name="AlertCircle" size={24} />
                <span>Знакомая проблема?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Накрученные отзывы и устаревшая информация
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <Icon name="X" size={20} className="text-destructive mt-1 flex-shrink-0" />
                  <span>Отзывы на сайтах выглядят шаблонными и неискренними</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="X" size={20} className="text-destructive mt-1 flex-shrink-0" />
                  <span>Советы в соцсетях противоречивые и непроверенные</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="X" size={20} className="text-destructive mt-1 flex-shrink-0" />
                  <span>Информация устарела — подрядчики могли измениться</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 text-accent-foreground font-medium">
                <Icon name="Sparkles" size={24} />
                <span>Наше решение</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Живое сообщество невест
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <Icon name="Check" size={20} className="text-accent-foreground mt-1 flex-shrink-0" />
                  <span>Реальные истории от пар, которые недавно женились</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="Check" size={20} className="text-accent-foreground mt-1 flex-shrink-0" />
                  <span>Актуальные отзывы «здесь и сейчас» о локациях и подрядчиках</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="Check" size={20} className="text-accent-foreground mt-1 flex-shrink-0" />
                  <span>Идеи оформления и конкурсов от реальных свадеб</span>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                Как это работает
              </h2>
              <p className="text-lg text-muted-foreground">
                Три простых шага к идеальной свадьбе
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 space-y-4 bg-card hover:shadow-lg transition-shadow animate-scale-in">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-heading font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  Присоединись к чату
                </h3>
                <p className="text-muted-foreground">
                  Зарегистрируйся и получи доступ к сообществу невест и молодожёнов
                </p>
              </Card>

              <Card className="p-8 space-y-4 bg-card hover:shadow-lg transition-shadow animate-scale-in [animation-delay:100ms]">
                <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-heading font-bold text-secondary-foreground">2</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  Задавай вопросы
                </h3>
                <p className="text-muted-foreground">
                  Спроси о подрядчиках, локациях, идеях — получи честные ответы от реальных людей
                </p>
              </Card>

              <Card className="p-8 space-y-4 bg-card hover:shadow-lg transition-shadow animate-scale-in [animation-delay:200ms]">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-heading font-bold text-accent-foreground">3</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  Делись опытом
                </h3>
                <p className="text-muted-foreground">
                  После свадьбы расскажи свою историю и помоги другим невестам
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <img 
              src="https://cdn.poehali.dev/projects/0d6798cd-7b97-4fc9-9a9d-1e3416171141/files/2d682c7d-c6d9-4f26-8542-0ec65dc65390.jpg"
              alt="Романтическая свадебная атмосфера"
              className="rounded-3xl shadow-2xl w-full h-auto object-cover animate-fade-in"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/20 py-20 relative overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-24 text-secondary/30" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,80 600,40 900,60 L1200,80 L1200,0 Z" fill="currentColor" />
        </svg>
        <div className="absolute -bottom-10 right-1/3 w-56 h-56 bg-primary/5 rounded-full blur-2xl" />
        <div className="absolute top-20 left-10 w-40 h-40 bg-accent/10 rounded-full blur-xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-4 animate-fade-in text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                  Что говорят наши участницы
                </h2>
                <p className="text-lg text-muted-foreground">
                  Реальные истории от невест, которые нашли своё идеальное решение
                </p>
              </div>
              <div className="animate-fade-in">
                <img 
                  src="https://cdn.poehali.dev/projects/0d6798cd-7b97-4fc9-9a9d-1e3416171141/files/ab8d53d2-89d0-44ea-8827-22f509e1d082.jpg" 
                  alt="Сообщество невест" 
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 space-y-4 bg-card text-left animate-fade-in">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xl">👰</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Анна, вышла замуж 2 месяца назад</p>
                    <p className="text-sm text-muted-foreground">Москва</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  «Благодаря чату нашла фотографа, который действительно понимал наш стиль. Девочки поделились реальными фото с их свадеб — это было бесценно!»
                </p>
              </Card>

              <Card className="p-8 space-y-4 bg-card text-left animate-fade-in [animation-delay:100ms]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center">
                    <span className="text-xl">💕</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Мария, замужем 3 месяца</p>
                    <p className="text-sm text-muted-foreground">Санкт-Петербург</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  «Сэкономили кучу времени на поиске локации! Узнала об идеальном месте от девушки, которая праздновала там месяц назад. Всё оказалось именно так, как она описывала.»
                </p>
              </Card>

              <Card className="p-8 space-y-4 bg-card text-left animate-fade-in [animation-delay:200ms]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-xl">🎉</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Елена, свадьба через месяц</p>
                    <p className="text-sm text-muted-foreground">Казань</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  «Готовлюсь к свадьбе и каждый день нахожу здесь что-то полезное. Идеи конкурсов, советы по декору, честные отзывы — всё в одном месте!»
                </p>
              </Card>

              <Card className="p-8 space-y-4 bg-card text-left animate-fade-in [animation-delay:300ms]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xl">✨</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Дарья, замужем полгода</p>
                    <p className="text-sm text-muted-foreground">Екатеринбург</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  «Атмосфера поддержки невероятная! Когда начала паниковать за неделю до свадьбы, девочки успокоили и дали практичные советы. Теперь сама помогаю другим.»
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/0d6798cd-7b97-4fc9-9a9d-1e3416171141/files/9c2277fb-7346-4906-8374-61f3e0666d5f.jpg)' }}
        />
        <div className="absolute top-1/4 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <svg className="absolute bottom-0 left-0 w-full h-24 text-primary/5" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 C200,80 400,100 600,90 C800,80 1000,100 1200,90 L1200,120 Z" fill="currentColor" />
        </svg>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
              Начни планировать свадьбу мечты
            </h2>
            <p className="text-lg text-muted-foreground">
              Присоединяйся к сообществу, где невесты делятся реальным опытом и помогают друг другу
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Присоединиться бесплатно
            </Button>
            <p className="text-sm text-muted-foreground">
              Регистрация займёт меньше минуты
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/10 py-12 mt-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Сообщество невест. Создано с любовью для идеальных свадеб</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;