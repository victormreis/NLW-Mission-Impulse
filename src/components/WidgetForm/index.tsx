import { useState } from "react";
import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

 export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um Inseto'
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lampada'
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de uma nuvem de pensamento'
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbbackSent(false);
        setFeedbackType(null);
    }


    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
         
            {feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestarRequested={handleRestartFeedback}/>
            ) : (
                <>
                  {!feedbackType ? (
               <FeedbackTypeStep onFeedbackTypeChanged ={setFeedbackType} />
            ) : (
                <FeedbackContentStep 
                    feedbackType={feedbackType}
                    onFeedbackRestartRequested={handleRestartFeedback}
                    onFeedbackSent={() => setFeedbbackSent(true)}
                />
            ) }
                </>
            )}
          

            <footer>
                Feito com ♥ por <cite><a className="underline underline-offset-2" href="https://github.com/victormreis" target="_blank">Victor M. Reis</a></cite>
            </footer>
        </div>
    );
}