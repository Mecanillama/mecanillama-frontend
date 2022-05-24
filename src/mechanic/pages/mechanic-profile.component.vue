<template>
  <general-header-component></general-header-component>
  <pv-dropdown></pv-dropdown>
  <div class="m-6">
    <div class="grid">
      <div class="col text-center">
        <img
          class="text-center"
          src="https://images.unsplash.com/photo-1588993986550-6ae221c7146e?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=460"
          alt="car repair shop image"
        />
      </div>
      <div
        class="
          col
          text-center
          align-items-center
          flex flex-column
          main-description
        "
      >
        <h2 class="font-bold text-4xl">Fast Car</h2>
        <span>
          <span class=""> <i class="pi pi-star-fill"></i></span>
          47 reviews
        </span>
        <p>Prolongación Primavera 2390, Monterrico, Santiago de Surco</p>
        <p class="font-semibold">(585) 312-3611</p>
        <pv-button>Make an appointment</pv-button>
      </div>
    </div>
    <div
      class="
        text-left
        bg-white
        flex flex-column
        about-section
        p-6
        m-3
        border-round
      "
    >
      <h2 class="font-semibold text-2xl">About</h2>
      <div>
        <p>
          Looking to book a car service or MOT? Fast Car has hundreds of
          professional car service centres and MOT testing stations located all
          over the UK, from London to Manchester, Birmingham and Glasgow, so
          you'll be sure to find a garage near you.This location features a team
          of automotive technicians whose commitment to ongoing training and ASE
          Certifications ranks with the best. An investment in the necessary
          tools and diagnostic equipment helps make them capable of repairs
          ranging from tires and wheel alignment, to minor and major mechanical
          repairs, to check engine light diagnosis and repair, as well as your
          scheduled maintenance needs.
        </p>
      </div>
    </div>
    <div
      class="
        reviews-section
        text-left
        bg-white
        flex flex-column
        p-6
        m-3
        border-round
      "
    >
      <h2 class="font-semibold text-2xl">Reviews</h2>
      <div>
        <span class="font-semibold text-2xl p-3"> 4.5 </span>
        <span class="">
          <i class="pi pi-star-fill" style="font-size: 2rem"></i>
          <i class="pi pi-star-fill" style="font-size: 2rem"></i>
          <i class="pi pi-star-fill" style="font-size: 2rem"></i>
          <i class="pi pi-star-fill" style="font-size: 2rem"></i>
          <i class="pi pi-star-fill" style="font-size: 2rem"></i>
        </span>
      </div>
      <div class="flex flex-column">
        <ul style="list-style: none">
          <li v-for="review in reviews" :key="review.id">
            <div class="grid box-review p-5">
              <div class="col flex flex-column justify-content-center m-2">
                <p class="font-semibold p-2">{{ review.publisher }}</p>
                <span clas="p-2"
                  ><i class="pi pi-car p-2"></i>{{ review.car }}</span
                >
              </div>
              <div class="col">
                <div class="grid align-items-center p-2">
                  <!--
                  <span class="">
                    <i class="pi pi-star-fill"></i>
                    <i class="pi pi-star-fill"></i>
                    <i class="pi pi-star-fill"></i>
                    <i class="pi pi-star-fill"></i>
                    <i class="pi pi-star-fill"></i>
                  </span>
                  -->

                  <pv-rating
                    :modelValue="review.rating"
                    :readonly="true"
                    :cancel="false"
                  />

                  <span class="font-semibold pl-6" style="font-size: 1.1rem">
                    {{ review.date }}
                  </span>
                </div>
                <p>
                  {{ review.body }}
                </p>
              </div>
            </div>
          </li>
        </ul>

        <!--
        <div class="grid box-review p-5">
          <div class="col flex flex-column justify-content-center m-2">
            <p class="font-semibold p-2">Ludo Bagman</p>
            <span clas="p-2"
              ><i class="pi pi-car p-2"></i>2022 Mercedes-Benz C-Class</span
            >
          </div>
          <div class="col">
            <div class="grid align-items-center p-2">
              <span class="">
                <i class="pi pi-star-fill"></i>
                <i class="pi pi-star-fill"></i>
                <i class="pi pi-star-fill"></i>
                <i class="pi pi-star-fill"></i>
                <i class="pi pi-star-fill"></i>
              </span>
              <span class="font-semibold pl-6" style="font-size: 1.1rem">
                05/20/2022
              </span>
            </div>
            <p>
              A thorough and honest business! I know the job will always be done
              correctly and I don't have to return multiple times. They are also
              always on time and the wait is never too much.
            </p>
          </div>
        </div>
        -->
      </div>
    </div>
  </div>
</template>

<script>
import generalHeaderComponent from "../../components/general-header.component.vue";
import { ReviewsApiService } from "../../reviews/services/reviews-api.service";
import { MechanicsProfileApiService } from "../services/mechanics-api.service";

export default {
  name: "mechanic-profile",
  component: {
    generalHeaderComponent,
  },
  data() {
    return {
      reviews: [],
      reviewsService: null,
    };
  },
  created() {
    this.reviewsService = new ReviewsApiService();
    this.reviewsService.getAll().then((response) => {
      this.reviews = response.data;
      console.log(this.reviews);
    });
  },
  methods: {
    //crud
    createReview() {
      this.reviewsService.create(this.review).then((response) => {
        this.reviews.push(response.data);
        this.review = {};
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.pi-star-fill {
  color: #e98b2f;
  padding: 10px;
  font-size: 1.5rem;
}

.main-description,
.about-section,
.reviews-section {
  gap: 1em;
}

.box-review {
  border-bottom: 1px solid #dae1e7;
}

::v-deep() {
  .p-rating .p-rating-star {
    height: 500px;
  }
}
</style>
