/*
 * Copyright 2021-present [Using Blockchain Ltd](https://using-blockchain.org), All rights reserved.
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
import { VersionedObjectStorage } from '@/core/database/backends/VersionedObjectStorage';
import { SimpleObjectStorage } from '@/core/database/backends/SimpleObjectStorage';
import { VersionedModel } from '@/core/database/entities/VersionedModel';
import { DatabaseTableModel } from '@/core/database/entities/DatabaseTableModel';

/**
 * Stored cache for plugin database tables.
 */
export class DatabaseTableModelStorage extends VersionedObjectStorage<DatabaseTableModel[]> {
    /**
     * Singleton instance as we want to run the migration just once
     */
    public static INSTANCE = new DatabaseTableModelStorage();

    public constructor(delegate = new SimpleObjectStorage<VersionedModel<DatabaseTableModel[]>>('databaseTables')) {
        super({
            delegate: delegate,
            migrations: [
                {
                    description: 'YourDLT Wallet Table Reset for databaseTables',
                    migrate: () => undefined,
                },
            ],
        });
    }
}
