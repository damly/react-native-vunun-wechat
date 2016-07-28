//
//  RNWeChat.h
//  RNWeChat
//
//  Created by damly on 16/7/15.
//  Copyright © 2016年 damly. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTBridgeModule.h"
#import "WXApi.h"

@interface RNWeChat : NSObject <RCTBridgeModule, WXApiDelegate>

- (BOOL) handleOpenURL:(NSURL *)url;

@end
