import { StoreActionTypes } from "./../actions/StoreActions";
const INITIAL_STATE2 = {
  stores: []
};
const INITIAL_STATE = {
  stores: [
    {
      address_name: "울산 남구 야음동 811-57",
      category_group_code: "FD6",
      category_group_name: "음식점",
      category_name: "음식점 > 술집 > 일본식주점",
      distance: "",
      id: "197999071",
      phone: "010-8448-5494",
      place_name: "야음동감성실비",
      place_url: "http://place.map.kakao.com/197999071",
      road_address_name: "울산 남구 수암로 221",
      x: "129.330784401497",
      y: "35.5254209998751"
    },
    {
      address_name: "울산 남구 야음동 580",
      category_group_code: "CE7",
      category_group_name: "카페",
      category_name: "음식점 > 카페 > 커피전문점 > 스타벅스",
      distance: "",
      id: "2111664474",
      phone: "1522-3232",
      place_name: "스타벅스 울산도산사거리DT점",
      place_url: "http://place.map.kakao.com/2111664474",
      road_address_name: "울산 남구 번영로 61",
      x: "129.33006881374723",
      y: "35.53097635653798"
    },
    {
      address_name: "울산 남구 야음동 453-6",
      category_group_code: "FD6",
      category_group_name: "음식점",
      category_name: "음식점 > 중식 > 중화요리",
      distance: "",
      id: "997357654",
      phone: "010-7159-6606",
      place_name: "탕화쿵푸마라탕 울산27호점",
      place_url: "http://place.map.kakao.com/997357654",
      road_address_name: "울산 남구 수암로 252",
      x: "129.332765868138",
      y: "35.5231633609672"
    },
    {
      address_name: "울산 남구 야음동 453-8",
      category_group_code: "FD6",
      category_group_name: "음식점",
      category_name: "음식점 > 한식 > 육류,고기 > 갈비",
      distance: "",
      id: "252844467",
      phone: "052-266-7009",
      place_name: "고집센그집갈비탕 울산야음점",
      place_url: "http://place.map.kakao.com/252844467",
      road_address_name: "울산 남구 신선로 187",
      x: "129.332957293834",
      y: "35.5227703984335"
    },
    {
      address_name: "울산 남구 야음동 789-91",
      category_group_code: "FD6",
      category_group_name: "음식점",
      category_name: "음식점 > 샤브샤브",
      distance: "",
      id: "27467299",
      phone: "052-256-6630",
      place_name: "바르미샤브뷔페 홈플러스 울산남구점",
      place_url: "http://place.map.kakao.com/27467299",
      road_address_name: "울산 남구 수암로 148",
      x: "129.322733409717",
      y: "35.5264423121681"
    },
    {
      address_name: "울산 남구 야음동 683-2",
      category_group_code: "FD6",
      category_group_name: "음식점",
      category_name: "음식점 > 한식 > 육류,고기",
      distance: "",
      id: "25978085",
      phone: "052-265-9259",
      place_name: "오구왕소금구이 울산점",
      place_url: "http://place.map.kakao.com/25978085",
      road_address_name: "울산 남구 대암로90번길 12",
      x: "129.325474133414",
      y: "35.5285231879228"
    },
    {
      address_name: "울산 남구 야음동 695-36",
      category_group_code: "FD6",
      category_group_name: "음식점",
      category_name: "음식점 > 퓨전요리 > 퓨전한식 > 본죽&비빔밥cafe",
      distance: "",
      id: "21379684",
      phone: "052-227-6288",
      place_name: "본죽&비빔밥cafe 울산야음점",
      place_url: "http://place.map.kakao.com/21379684",
      road_address_name: "울산 남구 수암로149번길 9",
      x: "129.322391670295",
      y: "35.5275878391638"
    },
    {
      address_name: "울산 남구 야음동 717-8",
      category_group_code: "FD6",
      category_group_name: "음식점",
      category_name: "음식점 > 치킨 > BHC치킨",
      distance: "",
      id: "11794676",
      phone: "052-265-2442",
      place_name: "BHC치킨 울산야음수암점",
      place_url: "http://place.map.kakao.com/11794676",
      road_address_name: "울산 남구 중앙로 24",
      x: "129.318624660947",
      y: "35.5236992772442"
    },
    {
      address_name: "울산 남구 야음동 753-9",
      category_group_code: "CE7",
      category_group_name: "카페",
      category_name: "음식점 > 카페 > 커피전문점 > 이디야커피",
      distance: "",
      id: "1920104336",
      phone: "052-256-0614",
      place_name: "이디야커피 울산야음롯데캐슬점",
      place_url: "http://place.map.kakao.com/1920104336",
      road_address_name: "울산 남구 신선로74번길 5",
      x: "129.320771090518",
      y: "35.5213800878254"
    },
    {
      address_name: "울산 남구 야음동 811-23",
      category_group_code: "FD6",
      category_group_name: "음식점",
      category_name: "음식점 > 한식 > 육류,고기",
      distance: "",
      id: "51815908",
      phone: "",
      place_name: "무쏘 울산야음점",
      place_url: "http://place.map.kakao.com/51815908",
      road_address_name: "울산 남구 수암로 221-1",
      x: "129.330921712071",
      y: "35.5254048290812"
    },
    {
      address_name: "울산 남구 야음동 816-6",
      category_group_code: "FD6",
      category_group_name: "음식점",
      category_name: "음식점 > 치킨 > 푸라닭치킨",
      distance: "",
      id: "1771084816",
      phone: "052-269-9206",
      place_name: "푸라닭치킨 울산야음점",
      place_url: "http://place.map.kakao.com/1771084816",
      road_address_name: "울산 남구 수암로224번길 15",
      x: "129.330656714366",
      y: "35.5237123536167"
    },
    {
      address_name: "울산 남구 야음동 911",
      category_group_code: "FD6",
      category_group_name: "음식점",
      category_name: "음식점 > 분식 > 떡볶이 > 죠스떡볶이",
      distance: "",
      id: "1358004274",
      phone: "052-227-4850",
      place_name: "죠스떡볶이 울산야음점",
      place_url: "http://place.map.kakao.com/1358004274",
      road_address_name: "울산 남구 수암로190번길 18",
      x: "129.3267881424632",
      y: "35.52581717427666"
    },
    {
      address_name: "울산 남구 야음동 695-36",
      category_group_code: "FD6",
      category_group_name: "음식점",
      category_name: "음식점 > 한식 > 육류,고기 > 족발,보쌈 > 도야족발",
      distance: "",
      id: "26628875",
      phone: "052-261-8829",
      place_name: "도야족발 울산야음점",
      place_url: "http://place.map.kakao.com/26628875",
      road_address_name: "울산 남구 수암로149번길 9",
      x: "129.322679597067",
      y: "35.5274813729025"
    },
    {
      address_name: "울산 남구 야음동 789-94",
      category_group_code: "FD6",
      category_group_name: "음식점",
      category_name: "음식점 > 간식 > 제과,베이커리 > 파리바게뜨",
      distance: "",
      id: "12354776",
      phone: "052-261-8211",
      place_name: "파리바게뜨 울산야음점",
      place_url: "http://place.map.kakao.com/12354776",
      road_address_name: "울산 남구 야음로 37",
      x: "129.323650742694",
      y: "35.5255343842242"
    },
    {
      address_name: "울산 남구 야음동 828-17",
      category_group_code: "CE7",
      category_group_name: "카페",
      category_name: "음식점 > 카페 > 커피전문점 > 이디야커피",
      distance: "",
      id: "336604139",
      phone: "052-227-2988",
      place_name: "이디야커피 울산야음루첸점",
      place_url: "http://place.map.kakao.com/336604139",
      road_address_name: "울산 남구 신선로 167-1",
      x: "129.330955346326",
      y: "35.5229100417931"
    }
  ],
  meta: {
    is_end: true,
    pageable_count: 7,
    same_name: {
      keyword: '"문수로 맛집"',
      region: [],
      selected_region: ""
    },
    total_count: 7
  }
};

const storeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StoreActionTypes.SET_STORE:
      return {
        ...state,
        stores: JSON.parse(action.payload)
      };
    case StoreActionTypes.SET_STORE_EMPTY:
      return {
        ...state,
        stores: []
      };
    default:
      return state;
  }
};

export default storeReducer;
