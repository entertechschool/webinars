"use client";

import { useState } from "react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface Props {
	aiModel: string;
}

export default function FormNotes({ aiModel }: Props) {
	const [loading, setLoading] = useState(false);
	const [note, setNote] = useState("");
	const [summarizeNote, setSummarizeNote] = useState("");

	const handleReset = () => {
		setLoading(false);
		setNote("");
		setSummarizeNote("");
	}

	const handleButton = async () => {
		setLoading(true);
		try {
			const response = await fetch("/api/openai", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ rawNote: note }), // Enviar el texto dentro de un objeto JSON
			});

			if (response.ok) {
				const result = await response.json();
				setSummarizeNote(result.data);
			} else {
				console.error("Error al enviar los datos:", response.status);
			}
		} catch (error) {
			console.error("Error de red:", error);
		}
		setLoading(false);
	};

	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>Escribe una nota para ser resumida</CardTitle>
				<CardDescription>Modelo: {aiModel}</CardDescription>
			</CardHeader>
			<CardContent>
				<Textarea placeholder="mis notas..." rows={5} value={note} onChange={(e) => setNote(e.target.value)} className="text-xs font-semibold" />
				{summarizeNote && (
					<>
						<Separator className="my-4" />
						<Textarea value={summarizeNote} rows={3} className="text-emerald-600 font-semibold text-xs bg-slate-200" />
					</>
				)}
			</CardContent>
			<CardFooter className="flex gap-4">
				<Button className="w-full" variant="outline" onClick={handleReset} disabled={loading}>
					{loading ? "Resumiendo..." : "Reiniciar"}
				</Button>
				<Button className="w-full" variant="default" onClick={handleButton} disabled={loading}>
					{loading ? "Resumiendo..." : "Resumir"}
				</Button>
			</CardFooter>
		</Card>
	);
}
