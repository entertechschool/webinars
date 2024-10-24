import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import FormNotes from "@/components/formNotes";


import ai from "@/lib/ai";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-16 gap-16 sm:p-16 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-4 items-center sm:items-start w-xl">
				<section className="flex flex-row gap-4 items-center">
					<Avatar>
						<AvatarImage src="https://static.vecteezy.com/system/resources/previews/022/227/364/non_2x/openai-chatgpt-logo-icon-free-png.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<h1 className="text-4xl">Summarize Notes App</h1>
				</section>

				<section className="w-full">
					<FormNotes aiModel={ai.aiModel} />
				</section>
			</main>
			<footer className="flex gap-6 flex-wrap items-center justify-center">
				<p className="text-slate-500">Enter Tech School</p>
			</footer>
		</div>
	);
}
