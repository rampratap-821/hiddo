


// // utils/NativeAdComponent.js
// import React, { useRef, useEffect, useState } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import NativeAdView, {
//   HeadlineView,
//   TaglineView,
//   AdvertiserView,
//   CallToActionView,
//   IconView,
//   AdManager,
// } from "react-native-admob-native-ads";

// // const NATIVE_AD_ID = "ca-app-pub-6554023125470272/3861457336"; // ✅ apna ad id

// const NATIVE_AD_ID = "ca-app-pub-3940256099942544/2247696110";

// // ✅ Register repository only once (safe to keep here)
// AdManager.registerRepository({
//   name: "imageAd",
//   adUnitId: NATIVE_AD_ID,
//   numOfAds: 3,
//   nonPersonalizedAdsOnly: false,
//   videoOptions: { mute: false },
//   expirationPeriod: 3600000,
//   mediationEnabled: false,
// }).then((result) => {
//   console.log("✅ Repository Registered:", result);
// });

// const NativeAdComponent = ({ style }) => {
//   const nativeAdViewRef = useRef(null);
//   const [adFailed, setAdFailed] = useState(false);

//   useEffect(() => {
//     nativeAdViewRef.current?.loadAd();
//   }, []);

//   return (
//     <NativeAdView
//       ref={nativeAdViewRef}
//       adUnitID={NATIVE_AD_ID}
//       style={[styles.adContainer, style]}
//       onAdLoaded={() => setAdFailed(false)}
//       onAdFailedToLoad={(err) => {
//         console.log("❌ Native Ad Failed:", err);
//         setAdFailed(true);
//       }}
//     >
//       {adFailed ? (
//         <View style={{ padding: 20, alignItems: "center" }}>
//           <Text>No Ad Available</Text>
//         </View>
//       ) : (
//         <View style={styles.adContent}>
//           <IconView style={styles.icon} />
//           <View style={{ flex: 1 }}>
//             <HeadlineView style={styles.headline} />
//             <TaglineView style={styles.tagline} />
//             <AdvertiserView style={styles.advertiser} />
//           </View>
//           <CallToActionView
//             style={styles.ctaButton}
//             textStyle={styles.ctaText}
//           />
//         </View>
//       )}
//     </NativeAdView>
//   );
// };

// export default NativeAdComponent;

// const styles = StyleSheet.create({
//   adContainer: {
//     width: "100%",
//     borderRadius: 12,
//     overflow: "hidden",
//     elevation: 3,
//     marginBottom: 20,
//     // marginVertical:20,
//     // paddingVertical:20,
//       backgroundColor: "white",
//     // marginHorizontal:20
//   },
//   adContent: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 10,
//   },
//   icon: {
//     width: 60,
//     height: 60,
//     marginRight: 10,
//   },
//   headline: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   tagline: {
//     fontSize: 14,
//     color: "#666",
//   },
//   advertiser: {
//     fontSize: 12,
//     color: "#999",
//   },
//   ctaButton: {
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     backgroundColor: "#007BFF",
//     borderRadius: 8,
//   },

//   ctaText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
// });








// // // utils/NativeAdComponent.js
// // import React, { useRef, useEffect, useState } from "react";
// // import { View, Text, StyleSheet } from "react-native";
// // import NativeAdView, {
// //   HeadlineView,
// //   TaglineView,
// //   AdvertiserView,
// //   CallToActionView,
// //   IconView,
// //   AdManager,
// // } from "react-native-admob-native-ads";

// // // ✅ Test ID (replace later with your real ad unit)
// //  const NATIVE_AD_ID = "ca-app-pub-3940256099942544/2247696110";
// //   // const NATIVE_AD_ID = "ca-app-pub-6554023125470272/3861457336";

// // const NativeAdComponent = ({ style }) => {
// //   const nativeAdViewRef = useRef(null);
// //   const [adFailed, setAdFailed] = useState(false);

// //   useEffect(() => {
// //     const setupRepo = async () => {
// //       try {
// //         const result = await AdManager.registerRepository({
// //           name: "imageAd",
// //           adUnitId: NATIVE_AD_ID,
// //           numOfAds: 3,
// //           nonPersonalizedAdsOnly: false,
// //           videoOptions: { mute: false },
// //           expirationPeriod: 3600000,
// //           mediationEnabled: false,
// //         });
// //         console.log("✅ Repository Registered:", result);

// //         // small delay to avoid race condition
// //         setTimeout(() => {
// //           nativeAdViewRef.current?.loadAd();
// //         }, 500);
// //       } catch (e) {
// //         console.log("❌ Repo Error:", e);
// //       }
// //     };

// //     setupRepo();
// //   }, []);

// //   return (
// //     <NativeAdView
// //       ref={nativeAdViewRef}
// //       adUnitID={NATIVE_AD_ID}
// //       repository="imageAd"
// //       style={[styles.adContainer, style]}
// //       onAdLoaded={() => {
// //         console.log("✅ Native Ad Loaded");
// //         setAdFailed(false);
// //       }}
// //       onAdFailedToLoad={(err) => {
// //         console.log("❌ Native Ad Failed:", JSON.stringify(err));
// //         setAdFailed(true);
// //       }}
// //     >
// //       {adFailed ? (
// //         <View style={{ padding: 20, alignItems: "center" }}>
// //           <Text>No Ad Available</Text>
// //         </View>
// //       ) : (
// //         <View style={styles.adContent}>
// //           <IconView style={styles.icon} />
// //           <View style={{ flex: 1 }}>
// //             <HeadlineView style={styles.headline} />
// //             <TaglineView style={styles.tagline} />
// //             <AdvertiserView style={styles.advertiser} />
// //           </View>
// //           <CallToActionView
// //             style={styles.ctaButton}
// //             textStyle={styles.ctaText}
// //           />
// //         </View>
// //       )}
// //     </NativeAdView>
// //   );
// // };

// // export default NativeAdComponent;

// // const styles = StyleSheet.create({
// //   adContainer: {
// //     width: "95%",
// //     borderRadius: 12,
// //     overflow: "hidden",
// //     elevation: 3,
// //     marginBottom: 20,
// //     backgroundColor: "#fff",
// //   },
// //   adContent: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     padding: 10,
// //   },
// //   icon: {
// //     width: 60,
// //     height: 60,
// //     marginRight: 10,
// //   },
// //   headline: {
// //     fontSize: 16,
// //     fontWeight: "bold",
// //   },
// //   tagline: {
// //     fontSize: 14,
// //     color: "#666",
// //   },
// //   advertiser: {
// //     fontSize: 12,
// //     color: "#999",
// //   },
// //   ctaButton: {
// //     paddingVertical: 6,
// //     paddingHorizontal: 12,
// //     backgroundColor: "#007BFF",
// //     borderRadius: 8,
// //   },
// //   ctaText: {
// //     color: "#fff",
// //     fontWeight: "bold",
// //   },
// // });
 

import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import {
  NativeAd,
  NativeAdView,
  NativeAsset,
  NativeMediaView,
  NativeAssetType,
  TestIds,
  NativeAdEventType,
} from 'react-native-google-mobile-ads';

// const AD_UNIT_ID = 'ca-app-pub-3940256099942544/1044960115';

 const AD_UNIT_ID  = 'ca-app-pub-6554023125470272/3861457336'
const { width } = Dimensions.get('window');

const NativeAdComponent= () => {
  const [nativeAd, setNativeAd] = useState(null);

  useEffect(() => {
    const loadAd = async () => {
      try {
        const ad = await NativeAd.createForAdRequest(AD_UNIT_ID, {
          requestNonPersonalizedAdsOnly: true,
          mediaAspectRatio: 1.5,
        });
        
        console.log('✅ Native Ad loaded:', {
          headline: ad.headline,
          body: ad.body,
          icon: ad.icon?.url,
          images: ad.images?.length,
          mediaContent: ad.mediaContent
        });
        
        setNativeAd(ad);

        ad.addAdEventListener(NativeAdEventType.CLICKED, () => {
          console.log('🔗 Native ad clicked');
        });
        
        ad.addAdEventListener(NativeAdEventType.IMPRESSION, () => {
          console.log('👁 Native ad impression recorded');
        });
      } catch (error) {
        console.log('❌ Failed to load native ad:', error);
      }
    };

    loadAd();

    return () => {
      nativeAd?.destroy();
    };
  }, []);

  if (!nativeAd) {
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.adLabel}>Sponsored</Text>
        <View style={styles.adContainer}>
          <Text>Loading ad...</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.adLabel}>Sponsored</Text>
      
      <NativeAdView nativeAd={nativeAd} style={styles.adContainer}>
        <View style={styles.headerRow}>
          {nativeAd.icon && (
            <NativeAsset assetType={NativeAssetType.ICON}>
              <Image source={{ uri: nativeAd.icon.url }} style={styles.icon} />
            </NativeAsset>
          )}
          
          <View style={styles.titleContainer}>
            <NativeAsset assetType={NativeAssetType.HEADLINE}>
              <Text style={styles.headline} numberOfLines={2}>
                {nativeAd.headline || 'Test Ad Headline'}
              </Text>
            </NativeAsset>
            
            <Text style={styles.advertiser} numberOfLines={1}>
              {nativeAd.advertiser || 'Advertisement'}
            </Text>
          </View>
        </View>

        {nativeAd.body && (
          <NativeAsset assetType={NativeAssetType.BODY}>
            <Text style={styles.bodyText} numberOfLines={2}>
              {nativeAd.body}
            </Text>
          </NativeAsset>
        )}

        {/* Media View - Fallback agar media na ho to */}
        <View style={styles.mediaContainer}>
          <NativeMediaView 
            style={styles.media} 
            resizeMode="cover"
          />
          {/* Fallback image agar media na load ho */}
          {(!nativeAd.mediaContent && nativeAd.images && nativeAd.images.length > 0) && (
            <Image 
              source={{ uri: nativeAd.images[0].url }} 
              style={styles.fallbackImage}
              resizeMode="cover"
            />
          )}
        </View>

        <View style={styles.footer}>
          <View style={styles.ratingContainer}>
            {nativeAd.starRating && (
              <View style={styles.stars}>
                <Text style={styles.rating}>⭐ {nativeAd.starRating}/5</Text>
              </View>
            )}
            {nativeAd.price && (
              <Text style={styles.price}>{nativeAd.price}</Text>
            )}
          </View>
          
          {nativeAd.callToAction && (
            <NativeAsset assetType={NativeAssetType.CTA}>
              <TouchableOpacity style={styles.ctaButton}>
                <Text style={styles.ctaText}>
                  {nativeAd.callToAction || 'Install'}
                </Text>
              </TouchableOpacity>
            </NativeAsset>
          )}
        </View>
      </NativeAdView>
    </View>
  );
};

export default NativeAdComponent;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  adContainer: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    borderLeftColor: "#0dd33fff",
    borderLeftWidth: 4,
    shadowColor: "#0ccf2cff",
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.1,
    elevation: 5,
    minHeight: 120, // Minimum height ensure karne ke liye
  },
  adLabel: {
    fontSize: 12,
    color: '#888',
    marginBottom: 8,
    marginLeft: 8,
    fontWeight: '500',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 12,
    marginRight: 12,
    backgroundColor: '#f5f5f5',
  },
  titleContainer: {
    flex: 1,
  },
  headline: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  advertiser: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  bodyText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 18,
    marginBottom: 12,
  },
  mediaContainer: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#f8f8f8',
    overflow: 'hidden',
    position: 'relative',
  },
  media: {
    width: '100%',
    height: '100%',
  },
  fallbackImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  ratingContainer: {
    flex: 1,
  },
  stars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: '#FF9500',
    fontWeight: '600',
  },
  price: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
    marginTop: 4,
  },
  ctaButton: {
    backgroundColor: '#DD2476',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    shadowColor: '#DD2476',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    minWidth: 100,
  },
  ctaText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
});