import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [name, setName] = useState('');
  const [showGreeting, setShowGreeting] = useState(false);
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: number; duration: number; delay: number; size: number }>>([]);

  useEffect(() => {
    const flakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 8 + Math.random() * 7,
      delay: Math.random() * 5,
      size: 0.5 + Math.random() * 1
    }));
    setSnowflakes(flakes);
  }, []);

  const greetings = [
    "С Новым годом! Пусть твои мечты сбываются, как снежинки падают с неба!",
    "Волшебного Нового года! Пусть каждый день будет полон радости и чудес!",
    "Счастливого Нового года! Желаю тебе исполнения всех желаний!",
    "С праздником! Пусть Новый год принесёт море счастья и волшебства!",
    "Поздравляю с Новым годом! Пусть он будет ярким и незабываемым!"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setShowGreeting(true);
    }
  };

  const handleReset = () => {
    setShowGreeting(false);
    setName('');
  };

  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#1a1f2c] via-[#2d3548] to-[#1a1f2c]">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake text-white opacity-70"
          style={{
            left: `${flake.left}%`,
            fontSize: `${flake.size}rem`,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
          }}
        >
          ❄
        </div>
      ))}

      <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/97d9faee-bd63-4845-9a08-332cff3802bf/files/e6d8d4e0-2f37-4cd9-83db-daf268694391.jpg')] opacity-5 bg-cover bg-center"></div>

      <div className="relative z-10 container mx-auto px-4 py-12 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-2xl">
          {!showGreeting ? (
            <Card className="bg-card/80 backdrop-blur-xl border-2 border-primary/30 shadow-2xl animate-fade-in">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="inline-block mb-6 relative">
                    <img 
                      src="https://cdn.poehali.dev/projects/97d9faee-bd63-4845-9a08-332cff3802bf/files/af8ff66b-07ff-40ad-b5a9-20013cdceef3.jpg"
                      alt="Дед Мороз"
                      className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-xl"
                    />
                    <div className="absolute -top-2 -right-2 text-4xl animate-twinkle">✨</div>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-4 animate-shimmer bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent">
                    Новогоднее волшебство
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground">
                    Получи персональное поздравление от Деда Мороза!
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Icon name="Sparkles" size={16} className="text-primary" />
                      Как тебя зовут?
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Введи своё имя..."
                      className="h-14 text-lg bg-background/50 backdrop-blur border-2 border-muted focus:border-primary transition-all"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    <Icon name="Gift" size={20} className="mr-2" />
                    Получить поздравление
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-card/80 backdrop-blur-xl border-2 border-primary/30 shadow-2xl animate-fade-in">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="mb-8">
                  <img 
                    src="https://cdn.poehali.dev/projects/97d9faee-bd63-4845-9a08-332cff3802bf/files/af8ff66b-07ff-40ad-b5a9-20013cdceef3.jpg"
                    alt="Дед Мороз"
                    className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-primary shadow-xl mb-6"
                  />
                  <div className="text-6xl mb-4">🎄</div>
                  <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">
                    {name}!
                  </h2>
                </div>

                <div className="bg-background/50 backdrop-blur rounded-xl p-6 md:p-8 mb-8 border border-primary/20">
                  <p className="text-xl md:text-2xl leading-relaxed text-foreground">
                    {randomGreeting}
                  </p>
                  <div className="flex justify-center gap-3 mt-6 text-3xl">
                    <span className="animate-twinkle" style={{ animationDelay: '0s' }}>⭐</span>
                    <span className="animate-twinkle" style={{ animationDelay: '0.3s' }}>🎁</span>
                    <span className="animate-twinkle" style={{ animationDelay: '0.6s' }}>✨</span>
                  </div>
                </div>

                <Button
                  onClick={handleReset}
                  size="lg"
                  className="h-14 text-lg font-semibold bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <Icon name="RotateCcw" size={20} className="mr-2" />
                  Поздравить ещё
                </Button>
              </CardContent>
            </Card>
          )}

          <div className="text-center mt-8 text-muted-foreground text-sm">
            <p className="flex items-center justify-center gap-2">
              <Icon name="Snowflake" size={16} />
              Создано с новогодним волшебством
              <Icon name="Snowflake" size={16} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
