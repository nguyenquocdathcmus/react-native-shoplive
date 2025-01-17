#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(ShopliveModule, NSObject)

RCT_EXTERN_METHOD(multiply:(float)a withB:(float)b
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}
RCT_EXTERN_METHOD(playWithAuthToken:(NSString *)campaign jwtToken:(NSString *)jwtToken)
RCT_EXTERN_METHOD(play:(NSString *)campaign )
RCT_EXTERN_METHOD(setAccessKey:(NSString *)accessKey)
RCT_EXTERN_METHOD(setUser:(NSString *)userId userName:(NSString *)userName)
RCT_EXTERN_METHOD(setShareUrl:(NSString *)schemeUrl)
RCT_EXTERN_METHOD(close)
RCT_EXTERN_METHOD(supportedEvents)
RCT_EXTERN_METHOD(startPictureInPicture)
RCT_EXTERN_METHOD(stopPictureInPicture)




@end
