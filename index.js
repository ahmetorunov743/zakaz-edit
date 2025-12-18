import { useState } from "react";
export default function EditOrderSite() {
const [form, setForm] = useState({ name: "", contact: "", details: "" });


const TELEGRAM_USERNAME = "Reklomist777";
const GMAIL = "ahmetorunov743@gmail.com"; // ← замени


const handleSubmit = () => {
const text = `Привет! Хочу заказать эдит.%0A%0AИмя: ${form.name}%0AКонтакт: ${form.contact}%0AОписание: ${form.details}`;
window.location.href = `https://t.me/${TELEGRAM_USERNAME}?text=${text}`;
};


return (
<div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white flex items-center justify-center p-6">
<Card className="max-w-xl w-full bg-zinc-950/80 border-zinc-800 rounded-2xl shadow-xl">
<CardContent className="p-6 space-y-6">
<h1 className="text-3xl font-bold text-center">Заказ эдита</h1>
<p className="text-center text-zinc-400">
Заполни форму или напиши напрямую
</p>


{/* ФОРМА + РЕДИРЕКТ В TELEGRAM */}
<Input
placeholder="Твоё имя"
value={form.name}
onChange={(e) => setForm({ ...form, name: e.target.value })}
/>
<Input
placeholder="Telegram или Email"
value={form.contact}
onChange={(e) => setForm({ ...form, contact: e.target.value })}
/>
<Textarea
placeholder="Опиши эдит: стиль, трек, длительность, рефы"
value={form.details}
onChange={(e) => setForm({ ...form, details: e.target.value })}
/>


<Button onClick={handleSubmit} className="w-full rounded-xl text-lg">
Отправить и перейти в Telegram
</Button>


{/* ПРЯМЫЕ КНОПКИ */}
<div className="flex gap-4 pt-2">
<Button
variant="outline"
className="w-full rounded-xl"
onClick={() =>
(window.location.href = `https://t.me/${TELEGRAM_USERNAME}`)
}
>
Написать в Telegram
</Button>
<Button
variant="outline"
className="w-full rounded-xl"
onClick={() =>
(window.location.href = `mailto:${GMAIL}?subject=Заказ эдита`)
}
>
Написать в Gmail
</Button>
</div>


<p className="text-xs text-zinc-500 text-center">
Цена и сроки обсуждаются лично
</p>
</CardContent>
</Card>
</div>
);
}