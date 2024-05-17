/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Agence = "agence",
	Agent = "agent",
	Artistes = "artistes",
	Events = "events",
	Maison = "maison",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AgenceRecord = {
	description?: string
	mail?: string
	nbr_agent?: number
	nbr_biens?: number
	nom_agence?: string
	site?: string
	telephone?: number
}

export type AgentRecord = {
	mail?: string
	nom?: string
	photo_profil?: string
	prenom?: string
	telephone?: number
}

export type ArtistesRecord = {
	mail?: string
	nom?: string
	nom_artiste?: string
	prenom?: string
}

export enum EventsFieldOptions {
	"Danse" = "Danse",
	"Musique" = "Musique",
	"Théâtre" = "Théâtre",
}
export type EventsRecord = {
	Date?: IsoDateString
	EventName?: string
	Image?: string
	description?: string
	field?: EventsFieldOptions[]
	lien1?: RecordIdString
}

export type MaisonRecord = {
	adresse?: string
	favori?: boolean
	images?: string
	nbChambres?: number
	nbSdb?: number
	nomMaison?: string
	prix?: number
	surface?: number
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type AgenceResponse<Texpand = unknown> = Required<AgenceRecord> & BaseSystemFields<Texpand>
export type AgentResponse<Texpand = unknown> = Required<AgentRecord> & BaseSystemFields<Texpand>
export type ArtistesResponse<Texpand = unknown> = Required<ArtistesRecord> & BaseSystemFields<Texpand>
export type EventsResponse<Texpand = unknown> = Required<EventsRecord> & BaseSystemFields<Texpand>
export type MaisonResponse<Texpand = unknown> = Required<MaisonRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	agence: AgenceRecord
	agent: AgentRecord
	artistes: ArtistesRecord
	events: EventsRecord
	maison: MaisonRecord
	users: UsersRecord
}

export type CollectionResponses = {
	agence: AgenceResponse
	agent: AgentResponse
	artistes: ArtistesResponse
	events: EventsResponse
	maison: MaisonResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'agence'): RecordService<AgenceResponse>
	collection(idOrName: 'agent'): RecordService<AgentResponse>
	collection(idOrName: 'artistes'): RecordService<ArtistesResponse>
	collection(idOrName: 'events'): RecordService<EventsResponse>
	collection(idOrName: 'maison'): RecordService<MaisonResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
