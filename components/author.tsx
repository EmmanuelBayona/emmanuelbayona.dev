import { MouseFollowTooltip } from "./mouse-follow-tooltip"

export const Author = () => {
    return (
        <div className="flex flex-col">
            <span className="text-sm">Written by</span>
            <MouseFollowTooltip
                message="Check out GitHub profile"
                className="p-0 mt-1 items-start w-full"
            >
                <a className="flex items-center justify-start gap-3"
                    target="_blank"
                    aria-label="Emmanuel Bayona's GitHub profile"
                    rel="noopener noreferrer"
                    href="https://github.com/EmmanuelBayona"
                >
                    <img
                        src="https://avatars.githubusercontent.com/u/e?email=bayonaj368@gmail.com"
                        alt="Emmanuel Bayona"
                        className="rounded-full w-9 h-9"
                    />

                    <span className="text-sm">Emmanuel Bayona</span>
                </a>
            </MouseFollowTooltip>
        </div>
    )
}
