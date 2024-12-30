import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/SnippetEditForm";

interface SnippetEditPageProps {
    params: {
        id: string;
    };
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
    const { id } = await props.params

    const snippet = await db.snippet.findFirst({
        where: { id: parseInt(id) }
    })

    if (!snippet) notFound()

    return (
        <div><SnippetEditForm snippet={snippet}/></div>
    )
}