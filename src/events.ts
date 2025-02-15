/*
 * Copyright 2020 NEM (https://nem.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and limitations under the License.
 *
 */
import Vue from 'vue';

/// region event bus (events propagated on parallel thread)
/**
 * This event bus channels following events:
 *
 * - newConnection with \a nodeUrl
 * - onProfileChange with \a profileName
 * - onAccountChange with \a accountAddress
 */
export const $eventBus = new Vue();
/// end-region event bus

/// region plugin bus (events propagated on parallel thread)
/**
 * This plugin bus channels following events:
 *
 * - onPluginsReady with \a plugins
 * - onPluginLoaded with \a pluginData
 * - onPluginActionRequest with \a actionPayload
 * - onPluginActionResponse with \a responseJson
 *
 * @see {store/Plugin}
 */
export const $pluginBus = new Vue();
/// end-region plugin bus
