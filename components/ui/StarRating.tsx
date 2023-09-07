import { AggregateRating } from "apps/commerce/types.ts";
import Icon from "deco-sites/lojateste/components/ui/Icon.tsx";

const QTD_STARS = 5;

export function StarRating({ratingValue = 0, ratingCount = 0}: AggregateRating) {
	const starMap = Array(QTD_STARS).fill(null);
	const percentStar = (ratingValue * 100) / QTD_STARS;
	return (
    <div class="flex gap-1 items-center">
      <div class="relative" style={{ width: "120px", height: "24px" }} data-ratingValue={ratingValue}>
        <div
          class="absolute z-10 overflow-hidden"
          style={{ width: `${percentStar}%` }}
        >
          <div class="flex" style={{ width: "120px" }}>
            {starMap.map(() => (
              <Icon id="Star" width={24} height={24} class="text-base" />
            ))}
          </div>
        </div>
        <div class="absolute overflow-hidden">
          <div class="flex" style={{ width: "120px" }}>
            {starMap.map(() => (
              <Icon
                id="Star"
                width={24}
                height={24}
                class="text-neutral-content"
              />
            ))}
          </div>
        </div>
      </div>
      <div class="truncate text-base text-base-content block">
        ({ratingCount})
      </div>
    </div>
	);
}
