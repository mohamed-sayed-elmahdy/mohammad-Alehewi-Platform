import { HeartHandshake, ShieldCheck, TrendingUp, UsersRound } from "lucide-react";
import { useTranslations } from "next-intl";

const pillars = [
	{ key: "honesty", icon: ShieldCheck },
	{ key: "visitorExperience", icon: HeartHandshake },
	{
		key: "continuousImprovement",
		icon: TrendingUp,
	},
	{ key: "guideTraining", icon: UsersRound },
] as const;

export function MissionStatement() {
	const t = useTranslations("Mission");

	return (
		<section className="w-full rounded-[30px] border border-(--color-accent)/45 bg-(--color-surface)/55 p-6 sm:p-10">
			<h1 className="font-alexandria text-center text-3xl font-bold text-(--color-accent) sm:text-4xl">
				{t("title")}
			</h1>
			<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
				{pillars.map(({ key, icon: Icon }) => (
					<article
						key={key}
						className="flex flex-col items-center rounded-[24px] border border-(--color-accent)/25 bg-(--color-background)/35 px-5 py-7 text-center"
					>
						<Icon aria-hidden="true" className="size-11 text-(--color-accent)" />
						<p className="mt-4 text-[15px] leading-8 text-(--color-secondary-text) sm:text-base">
							{t(`pillars.${key}`)}
						</p>
					</article>
				))}
			</div>
		</section>
	);
}
